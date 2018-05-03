import React from 'react';
import { ScrollView, StatusBar, Platform } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { ListItem, Separator } from '../components/List';

const styles = EStyleSheet.create({
    $blue: '$primaryBlue',
    $orange: '$primaryOrange',
    $green: '$primaryGreen',
    $purple: '$primaryPurple',
    $paddingTop: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
});

class Themes extends React.Component {
    handleThemePressed = (color) => {
        console.log('press theme:', color);
    };

    render() {
        return (
            <ScrollView style={{ paddingTop: styles.$paddingTop }}>
                <StatusBar barStyle="default" translucent={false} />
                <ListItem
                    text="Blue"
                    onPress={() => this.handleThemePressed(styles.$blue)}
                    selected
                    checkMark={false}
                    iconBackground={styles.$blue}
                />
                <Separator />
                <ListItem
                    text="Orange"
                    onPress={() => this.handleThemePressed(styles.$orange)}
                    selected
                    checkMark={false}
                    iconBackground={styles.$orange}
                />
                <Separator />
                <ListItem
                    text="Green"
                    onPress={() => this.handleThemePressed(styles.$green)}
                    selected
                    checkMark={false}
                    iconBackground={styles.$green}
                />
                <Separator />
                <ListItem
                    text="Purple"
                    onPress={() => this.handleThemePressed(styles.$purple)}
                    selected
                    checkMark={false}
                    iconBackground={styles.$purple}
                />
                <Separator />
            </ScrollView>
        );
    }
}

export default Themes;
