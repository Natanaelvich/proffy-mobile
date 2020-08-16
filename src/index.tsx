import React from 'react';
import Routes from './routes';
import { StatusBar } from 'expo-status-bar';

import { AppLoading } from 'expo';

import {
    Archivo_400Regular,
    Archivo_700Bold,
    useFonts
} from '@expo-google-fonts/archivo';
import {
    Poppins_400Regular,
    Poppins_600SemiBold
} from '@expo-google-fonts/poppins';

const App: React.FC = () => {
    let [fontsLoaded] = useFonts({
        Archivo_400Regular,
        Archivo_700Bold,
        Poppins_400Regular,
        Poppins_600SemiBold
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <>
                <Routes />
                <StatusBar style="light" />
            </>
        );
    }
};

export default App;
