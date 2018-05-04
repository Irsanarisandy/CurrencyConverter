import React from 'react';
import { ScrollView, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';
import { ListItem, Separator } from '../components/List';
import { changePrimaryColor } from '../actions/themes';

const styles = EStyleSheet.create({
    $blue: '$primaryBlue',
    $orange: '$primaryOrange',
    $green: '$primaryGreen',
    $purple: '$primaryPurple',
});

class Themes extends React.Component {
    static propTypes = {
        navigation: PropTypes.object,
        dispatch: PropTypes.func,
    };

    handlePressTheme = (color) => {
        this.props.dispatch(changePrimaryColor(color));
        this.props.navigation.goBack();
    };

    render() {
        return (
            <ScrollView>
                <StatusBar barStyle="default" translucent={false} />
                <ListItem
                    text="Blue"
                    onPress={() => this.handlePressTheme(styles.$blue)}
                    selected
                    checkMark={false}
                    iconBackground={styles.$blue}
                />
                <Separator />
                <ListItem
                    text="Orange"
                    onPress={() => this.handlePressTheme(styles.$orange)}
                    selected
                    checkMark={false}
                    iconBackground={styles.$orange}
                />
                <Separator />
                <ListItem
                    text="Green"
                    onPress={() => this.handlePressTheme(styles.$green)}
                    selected
                    checkMark={false}
                    iconBackground={styles.$green}
                />
                <Separator />
                <ListItem
                    text="Purple"
                    onPress={() => this.handlePressTheme(styles.$purple)}
                    selected
                    checkMark={false}
                    iconBackground={styles.$purple}
                />
                <Separator />
            </ScrollView>
        );
    }
}

export default connect()(Themes);
