import { StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    $underlayColor: '$border',
    row: {
        backgroundColor: '$white',
        paddingHorizontal: 20,
        paddingVertical: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        color: '$darkText',
    },
    separator: {
        backgroundColor: '$border',
        marginLeft: 20,
        flex: 1,
        height: StyleSheet.hairlineWidth,
    },
    icon: {
        backgroundColor: 'transparent',
        width: 30,
        height: 30,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconVisible: {
        backgroundColor: '$primaryBlue',
    },
    checkIcon: {
        width: 18,
    },
});
