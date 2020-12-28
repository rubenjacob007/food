import * as React from 'react';
import { StatusBar } from 'expo-status-bar';

import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import List from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import TextScreen from "./src/screens/TextScreen";
import BoxScreen from "./src/screens/BoxScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ComponentsScreen" component={ComponentsScreen} />
      <Stack.Screen name="ListScreen" component={List} />
      <Stack.Screen name="ImageScreen" component={ImageScreen} />
       <Stack.Screen name="CounterScreen" component={CounterScreen} />
       <Stack.Screen name="Tex" component={TextScreen} />
       <Stack.Screen name="BoxScreen" component={BoxScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}