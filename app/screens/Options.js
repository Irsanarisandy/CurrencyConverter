import React from 'react';
import { ScrollView, StatusBar, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ListItem, Separator } from '../components/List';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

class Options extends React.Component {
    handleThemesPressed = () => {
        console.log('press themes');
    };

    handleSitePressed = () => {
        console.log('site pressed');
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

export default Options;
