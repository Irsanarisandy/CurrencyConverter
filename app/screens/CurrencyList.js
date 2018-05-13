import React from 'react';
import { FlatList, View, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ListItem, Separator } from '../components/List';
import { ThemeConsumer } from '../components/Theme';
import currencies from '../data/currencies';
import { changeBaseCurrency, changeQuoteCurrency } from '../actions/currencies';

class CurrencyList extends React.Component {
    static propTypes = {
        navigation: PropTypes.object,
        dispatch: PropTypes.func,
        baseCurrency: PropTypes.string,
        quoteCurrency: PropTypes.string,
    };

    handlePress = (currency) => {
        const { type } = this.props.navigation.state.params;
        if (type === 'base') {
            this.props.dispatch(changeBaseCurrency(currency));
        } else if (type === 'quote') {
            this.props.dispatch(changeQuoteCurrency(currency));
        }
        this.props.navigation.goBack(null);
    };

    render() {
        let comparisonCurrency = this.props.baseCurrency;

        if (this.props.navigation.state.params.type === 'quote') {
            comparisonCurrency = this.props.quoteCurrency;
        }

        return (
            <ThemeConsumer>
                {({ themeColor }) => (
                    <View style={{ flex: 1 }}>
                        <StatusBar barStyle="default" translucent={false} />
                        <FlatList
                            data={currencies}
                            renderItem={({ item }) => (
                                <ListItem
                                    text={item}
                                    selected={item === comparisonCurrency}
                                    onPress={() => this.handlePress(item)}
                                    iconBackground={themeColor}
                                />
                            )}
                            keyExtractor={item => item}
                            ItemSeparatorComponent={Separator}
                        />
                    </View>
                )}
            </ThemeConsumer>
        );
    }
}

const mapStateToProps = state => ({
    baseCurrency: state.currencies.baseCurrency,
    quoteCurrency: state.currencies.quoteCurrency,
});

export default connect(mapStateToProps)(CurrencyList);
