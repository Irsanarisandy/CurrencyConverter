import { StatusBar, Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import Home from '../screens/Home';
import CurrencyList from '../screens/CurrencyList';
import Options from '../screens/Options';
import Themes from '../screens/Themes';

const HomeStack = StackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions:
                Platform.OS === 'ios'
                    ? { header: () => null }
                    : { headerStyle: { height: 0 } },
        },
        Options: {
            screen: Options,
            navigationOptions: {
                headerTitle: 'Options',
            },
        },
        Themes: {
            screen: Themes,
            navigationOptions: {
                headerTitle: 'Themes',
            },
        },
    },
    {
        headerMode: 'screen',
        transitionConfig:
            Platform.OS === 'ios'
                ? null
                : () => ({
                    screenInterpolator: sceneProps =>
                        CardStackStyleInterpolator.forHorizontal(sceneProps),
                }),
    },
);

const CurrencyListStack = StackNavigator({
    CurrencyList: {
        screen: CurrencyList,
        navigationOptions: ({ navigation }) => ({
            headerTitle: navigation.state.params.title,
        }),
    },
});

export default StackNavigator(
    {
        Home: {
            screen: HomeStack,
        },
        CurrencyList: {
            screen: CurrencyListStack,
        },
    },
    {
        mode: 'modal',
        headerMode: 'none',
        cardStyle:
            Platform.OS === 'ios'
                ? { paddingTop: StatusBar.currentHeight }
                : {},
    },
);
