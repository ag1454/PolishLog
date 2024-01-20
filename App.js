import React from 'react';
import { Text } from 'react-native';
import Home from "./src/views/Home.js";
import YourLogs from "./src/views/YourLogs.js";
import AddLog from "./src/views/AddLog.js";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App(navigation, route) {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home Screen" component={Home} options={{headerShown: false}}/>

                <Stack.Screen name="Your Logs" component={YourLogs} options={{
                    headerTitle: () => <Text style={{color: "#FFFFFF", fontWeight: "bold", fontSize: 25, fontFamily: 'Cochin'}}>My Logs</Text>,
                    headerBackTitle: "",
                    headerStyle: {backgroundColor: "#FF92F4"},
                    headerTintColor: "#FFFFFF",
                }}/>

                <Stack.Screen name="Add Log" component={AddLog} options={{
                    headerTitle: () => <Text style={{color: "#FFFFFF", fontWeight: "bold", fontSize: 25, fontFamily: 'Cochin'}}>Add Logs</Text>,
                    headerBackTitle: "",
                    headerStyle: {backgroundColor: "#FF92F4"},
                    headerTintColor: "#FFFFFF",
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
  