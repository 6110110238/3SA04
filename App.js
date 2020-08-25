import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
//import { StyleSheet, Text, View } from 'react-native';
import ZipCodeScreen from './screen/ZipCodeScreen';
import WeatherScreen from './screen/WeatherScreen';

const Stack = createStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
            <Stack.Screen name="Home" component={ZipCodeScreen} options={{ headerStyle: { backgroundColor: "#00c0ff" } }}/>
            <Stack.Screen name="Weather" component={WeatherScreen} options={{ headerStyle: { backgroundColor: "#00c0ff" } }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
/* const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
}); */