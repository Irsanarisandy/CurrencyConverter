import React from 'react';
import { ScrollView, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';
import { ListItem, Separator } from '../components/List';
import { ThemeConsumer } from '../components/Theme';

const styles = EStyleSheet.create({
    $blue: '$primaryBlue',
    $orange: '$primaryOrange',
    $green: '$primaryGreen',
    $purple: '$primaryPurple',
});

class Themes extends React.Component {
    static propTypes = {
        navigation: PropTypes.object,
    };

    handlePressTheme = (color, changeThemeColor) => {
        changeThemeColor(color);
        this.props.navigation.goBack();
    };

    render() {
        return (
            <ThemeConsumer>
                {({ changeThemeColor }) => (
                    <ScrollView>
                        <StatusBar barStyle="default" translucent={false} />
                        <ListItem
                            text="Blue"
                            onPress={() =>
                                this.handlePressTheme(
                                    styles.$blue,
                                    changeThemeColor,
                                )
                            }
                            selected
                            checkMark={false}
                            iconBackground={styles.$blue}
                        />
                        <Separator />
                        <ListItem
                            text="Orange"
                            onPress={() =>
                                this.handlePressTheme(
                                    styles.$orange,
                                    changeThemeColor,
                                )
                            }
                            selected
                            checkMark={false}
                            iconBackground={styles.$orange}
                        />
                        <Separator />
                        <ListItem
                            text="Green"
                            onPress={() =>
                                this.handlePressTheme(
                                    styles.$green,
                                    changeThemeColor,
                                )
                            }
                            selected
                            checkMark={false}
                            iconBackground={styles.$green}
                        />
                        <Separator />
                        <ListItem
                            text="Purple"
                            onPress={() =>
                                this.handlePressTheme(
                                    styles.$purple,
                                    changeThemeColor,
                                )
                            }
                            selected
                            checkMark={false}
                            iconBackground={styles.$purple}
                        />
                        <Separator />
                    </ScrollView>
                )}
            </ThemeConsumer>
        );
    }
}

export default Themes;
