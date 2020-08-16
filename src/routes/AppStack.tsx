import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from '../screens/Landing';
import GiveClasses from '../screens/GiveClasses';
import StudyTabs from './StudyTabs';

const Stack = createStackNavigator();

function AppStack() {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Landing" component={Landing} />
            <Stack.Screen name="GiveClasses" component={GiveClasses} />
            <Stack.Screen name="StudyTabs" component={StudyTabs} />
        </Stack.Navigator>
    );
}

export default AppStack;
