import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Home';

const HomeStack = props => (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
    </Stack.Navigator>
);

const Stack = createStackNavigator();

const Navigation = props => (
    <NavigationContainer>
        <HomeStack />
    </NavigationContainer>
);

export default Navigation