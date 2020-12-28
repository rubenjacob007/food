import React,{useState} from 'react';
import {Text,View,Button,StyleSheet} from 'react-native';
const CounterScreen =() =>{

const [counter,SetCounter] = useState(0);
	return (<View>
		<Button title="increase" onPress={() =>{ SetCounter(counter + 1)}}/>
		<Button title="descrease"onPress={() =>{  SetCounter(counter - 1)}}/>
		<Text>{counter}</Text>
		</View>
	);
}



const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
   textsubheader: {
    fontSize: 10
  },
}); 
export default CounterScreen;