import React from 'react';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';
import color from 'color';
import PropTypes from 'prop-types';
import styles from './styles';

const InputWithButton = (props) => {
    const underlayColor = color(styles.$buttonBackgroundColorBase).darken(styles.$buttonBackgroundColorModifier);
    const containerStyles = [styles.container];
    const buttonTextStyles = [
        styles.buttonText,
        props.textColor ? { color: props.textColor } : null,
    ];

    if (props.editable === false) {
        containerStyles.push(styles.containerDisabled);
    }

    return (
        <View style={containerStyles}>
            <TouchableHighlight
                underlayColor={underlayColor}
                onPress={props.onPress}
                style={styles.buttonContainer}
            >
                <Text style={buttonTextStyles}>{props.buttonText}</Text>
            </TouchableHighlight>
            <View style={styles.separator} />
            <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                {...props}
            />
        </View>
    );
};

InputWithButton.propTypes = {
    buttonText: PropTypes.string,
    onPress: PropTypes.func,
    editable: PropTypes.bool,
    textColor: PropTypes.string,
};

export default InputWithButton;
