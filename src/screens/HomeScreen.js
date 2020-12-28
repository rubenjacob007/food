import React from "react";
import { Text,View,Button, StyleSheet } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const HomeScreen = (props) => {

    return ( <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Profiles"
        onPress={() => props.navigation.navigate('ListScreen')}
      />
      <Button
        title="Go to ImageScreen"
        onPress={() => props.navigation.navigate('ImageScreen')}
      />
       <Button
        title="Go to CounterScreen"
        onPress={() => props.navigation.navigate('CounterScreen')}
      />
      <Button
        title="Go to TextScreen"
        onPress={() => props.navigation.navigate('Tex')}
      />
       <Button
        title="Go to BoxScreen"
        onPress={() => props.navigation.navigate('BoxScreen')}
      />
    </View>
    );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
