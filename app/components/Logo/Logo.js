import React from 'react';
import { View, ImageBackground, Image, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Logo = ({ tintColor }) => {
    const imageStyles = [styles.logo, tintColor ? { tintColor } : null];

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('./images/background.png')}
                style={styles.containerImage}
                resizeMode="contain"
            >
                <Image
                    source={require('./images/logo.png')}
                    style={imageStyles}
                    resizeMode="contain"
                />
            </ImageBackground>
            <Text style={styles.text}>Currency Converter</Text>
        </View>
    );
};

Logo.propTypes = {
    tintColor: PropTypes.string,
};

export default Logo;
