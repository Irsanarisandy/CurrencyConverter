import { StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;

export default EStyleSheet.create({
    $buttonBackgroundColorBase: '$white',
    $buttonBackgroundColorModifier: 0.1,
    container: {
        backgroundColor: '$white',
        width: '90%',
        height: INPUT_HEIGHT,
        borderRadius: BORDER_RADIUS,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 11,
    },
    buttonContainer: {
        backgroundColor: '$white',
        height: INPUT_HEIGHT,
        borderTopLeftRadius: BORDER_RADIUS,
        borderBottomLeftRadius: BORDER_RADIUS,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontWeight: '600',
        fontSize: 20,
        paddingHorizontal: 16,
        color: '$primaryBlue',
    },
    separator: {
        height: INPUT_HEIGHT,
        width: StyleSheet.hairlineWidth,
        backgroundColor: '$border',
    },
    input: {
        height: INPUT_HEIGHT,
        flex: 1,
        fontSize: 18,
        paddingHorizontal: 8,
        color: '$inputText',
    },
    containerDisabled: {
        backgroundColor: '$lightGray',
    },
});
