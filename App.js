import React from 'react';
import { Text } from 'react-native';
import Home from "./src/views/Home.js";
import YourLogs from "./src/views/YourLogs.js";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App(navigation, route) {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home Screen" component={Home} options={{headerShown: false}}/>

                <Stack.Screen name="Your Logs" component={YourLogs} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
  