import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width / 2;

export default EStyleSheet.create({
    container: {
        alignItems: 'center',
    },
    containerImage: {
        alignItems: 'center',
        justifyContent: 'center',
        width: imageWidth,
    },
    logo: {
        width: imageWidth / 2,
        tintColor: '$primaryBlue',
    },
    text: {
        fontWeight: '600',
        fontSize: 28,
        marginTop: 15,
        color: '$white',
    },
});
