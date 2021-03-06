import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';
import Navigator from './config/routes';
import store from './config/store';
import { AlertProvider } from './components/Alert';
import { ThemeProvider } from './components/Theme';

EStyleSheet.build({
    $primaryBlue: '#4F6D7A',
    $primaryOrange: '#D57A66',
    $primaryGreen: '#00BD9D',
    $primaryPurple: '#9E768F',
    $white: '#FFFFFF',
    $lightGray: '#F0F0F0',
    $border: '#E2E2E2',
    $inputText: '#797979',
    $darkText: '#343434',
    // $outline: 1,  // for testing purposes
});

export default () => (
    <Provider store={store}>
        <ThemeProvider>
            <AlertProvider>
                <Navigator onNavigationStateChange={null} />
            </AlertProvider>
        </ThemeProvider>
    </Provider>
);
