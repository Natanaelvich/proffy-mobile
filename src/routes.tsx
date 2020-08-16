import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from './screens/Landing';
import GiveClasses from './screens/GiveClasses';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none">
                <Stack.Screen name="Landing" component={Landing} />
                <Stack.Screen name="GiveClasses" component={GiveClasses} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;
