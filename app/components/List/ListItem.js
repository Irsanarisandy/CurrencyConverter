import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import Icon from './Icon';
import styles from './styles';

const ListItem = ({
    text,
    selected,
    onPress,
    checkMark = true,
    visible = true,
    customIcon = null,
    iconBackground,
}) => (
    <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
        <View style={styles.row}>
            <Text style={styles.text}>{text}</Text>
            {selected ? (
                <Icon
                    checkMark={checkMark}
                    visible={visible}
                    iconBackground={iconBackground}
                />
            ) : (
                <Icon />
            )}
            {customIcon}
        </View>
    </TouchableHighlight>
);

ListItem.propTypes = {
    text: PropTypes.string,
    selected: PropTypes.bool,
    onPress: PropTypes.func,
    checkMark: PropTypes.bool,
    visible: PropTypes.bool,
    customIcon: PropTypes.element,
    iconBackground: PropTypes.string,
};

export default ListItem;
