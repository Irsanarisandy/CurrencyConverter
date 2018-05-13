import React from 'react';
import PropTypes from 'prop-types';

const ThemeContext = React.createContext({
    themeColor: '#4F6D7A',
    changeThemeColor: () => null,
});

export const ThemeConsumer = ThemeContext.Consumer;

export class ThemeProvider extends React.Component {
    static propTypes = {
        children: PropTypes.any,
    };

    state = {
        themeColor: '#4F6D7A',
    };

    changeThemeColor = (themeColor) => {
        this.setState({ themeColor });
    };

    render() {
        return (
            <ThemeContext.Provider
                value={{
                    themeColor: this.state.themeColor,
                    changeThemeColor: this.changeThemeColor,
                }}
            >
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}
