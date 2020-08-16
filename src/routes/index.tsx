import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './AppStack';

const Stack = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <AppStack />
        </NavigationContainer>
    );
}

export default Routes;
