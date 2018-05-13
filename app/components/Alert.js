import React from 'react';
import DropdownAlert from 'react-native-dropdownalert';
import PropTypes from 'prop-types';

const AlertContext = React.createContext({});

export const AlertConsumer = AlertContext.Consumer;

export class AlertProvider extends React.Component {
    static propTypes = {
        children: PropTypes.any,
    };

    alert = (...args) => this.dropdown.alert(...args);
    alertWithType = (...args) => this.dropdown.alertWithType(...args);

    render() {
        return (
            <AlertContext.Provider
                value={{
                    alert: this.alert,
                    alertWithType: this.alertWithType,
                }}
            >
                {this.props.children}
                <DropdownAlert
                    ref={(ref) => {
                        this.dropdown = ref;
                    }}
                />
            </AlertContext.Provider>
        );
    }
}
