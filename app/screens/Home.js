import React from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';
import { connectAlert } from '../components/Alert';
import { ThemeConsumer } from '../components/Theme';
import {
    getInitialConversion,
    changeCurrencyAmount,
    swapCurrency,
} from '../actions/currencies';

class Home extends React.Component {
    static propTypes = {
        navigation: PropTypes.object,
        dispatch: PropTypes.func,
        baseCurrency: PropTypes.string,
        quoteCurrency: PropTypes.string,
        amount: PropTypes.number,
        conversionRate: PropTypes.number,
        isFetching: PropTypes.bool,
        lastConvertedDate: PropTypes.object,
        alertWithType: PropTypes.func,
        currencyError: PropTypes.string,
    };

    componentWillMount() {
        this.props.dispatch(getInitialConversion());
    }

    componentWillReceiveProps(nextProps) {
        if (
            nextProps.currencyError &&
            nextProps.currencyError !== this.props.currencyError
        ) {
            this.props.alertWithType('error', 'Error', nextProps.currencyError);
        }
    }

    handlePressBaseCurrency = () => {
        this.props.navigation.navigate('CurrencyList', {
            title: 'Base Currency',
            type: 'base',
        });
    };

    handlePressQuoteCurrency = () => {
        this.props.navigation.navigate('CurrencyList', {
            title: 'Quote Currency',
            type: 'quote',
        });
    };

    handleChangeAmount = (amount) => {
        this.props.dispatch(changeCurrencyAmount(amount));
    };

    handleSwapCurrency = () => {
        this.props.dispatch(swapCurrency());
    };

    handleOptionsPress = () => {
        this.props.navigation.navigate('Options');
    };

    render() {
        let quotePrice = '...';

        if (!this.props.isFetching) {
            quotePrice = (
                this.props.amount * this.props.conversionRate
            ).toFixed(2);
        }

        return (
            <ThemeConsumer>
                {({ themeColor }) => (
                    <Container backgroundColor={themeColor}>
                        <StatusBar
                            barStyle="light-content"
                            translucent={false}
                        />
                        <Header onPress={this.handleOptionsPress} />
                        <KeyboardAvoidingView behavior="padding">
                            <Logo tintColor={themeColor} />
                            <InputWithButton
                                buttonText={this.props.baseCurrency}
                                onPress={this.handlePressBaseCurrency}
                                defaultValue={this.props.amount.toString()}
                                keyboardType="numeric"
                                onChangeText={this.handleChangeAmount}
                                textColor={themeColor}
                            />
                            <InputWithButton
                                buttonText={this.props.quoteCurrency}
                                onPress={this.handlePressQuoteCurrency}
                                editable={false}
                                value={quotePrice}
                                textColor={themeColor}
                            />
                            <LastConverted
                                base={this.props.baseCurrency}
                                quote={this.props.quoteCurrency}
                                conversionRate={this.props.conversionRate}
                                date={this.props.lastConvertedDate}
                            />
                            <ClearButton
                                text="Reverse Currencies"
                                onPress={this.handleSwapCurrency}
                            />
                        </KeyboardAvoidingView>
                    </Container>
                )}
            </ThemeConsumer>
        );
    }
}

const mapStateToProps = (state) => {
    const baseCurrency = state.currencies.baseCurrency;
    const quoteCurrency = state.currencies.quoteCurrency;
    const conversionSelector = state.currencies.conversions[baseCurrency] || {};
    const rates = conversionSelector.rates || {};

    return {
        baseCurrency,
        quoteCurrency,
        amount: state.currencies.amount,
        conversionRate: rates[quoteCurrency] || 0,
        isFetching: conversionSelector.isFetching,
        lastConvertedDate: conversionSelector.date
            ? new Date(conversionSelector.date)
            : new Date(),
        currencyError: state.currencies.error,
    };
};

export default connect(mapStateToProps)(connectAlert(Home));
