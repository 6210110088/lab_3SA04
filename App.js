import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import ZipCodeScreen from './screen/ZipCodeScreen';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" compenent={ZipCodeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}