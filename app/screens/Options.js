import React from 'react';
import { ScrollView, StatusBar, Platform, Linking } from 'react-native';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import { ListItem, Separator } from '../components/List';
import { connectAlert } from '../components/Alert';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

class Options extends React.Component {
    static propTypes = {
        navigation: PropTypes.object,
        alertWithType: PropTypes.func,
    };

    handleThemesPressed = () => {
        this.props.navigation.navigate('Themes');
    };

    handleSitePressed = () => {
        Linking.openURL('https://fixer.io').catch(() =>
            this.props.alertWithType(
                'error',
                'Error:',
                "Link can't be opened right now!",
            ));
    };

    render() {
        return (
            <ScrollView>
                <StatusBar barStyle="default" translucent={false} />
                <ListItem
                    text="Themes"
                    onPress={this.handleThemesPressed}
                    customIcon={
                        <Ionicons
                            name={`${ICON_PREFIX}-arrow-forward`}
                            color={ICON_COLOR}
                            size={ICON_SIZE}
                        />
                    }
                />
                <Separator />
                <ListItem
                    text="Fixer.io"
                    onPress={this.handleSitePressed}
                    customIcon={
                        <Ionicons
                            name={`${ICON_PREFIX}-link`}
                            color={ICON_COLOR}
                            size={ICON_SIZE}
                        />
                    }
                />
                <Separator />
            </ScrollView>
        );
    }
}

export default connectAlert(Options);
