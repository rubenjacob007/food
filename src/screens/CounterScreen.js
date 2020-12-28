import React,{useReducer} from 'react';
import {Text,View,Button,StyleSheet} from 'react-native';
const reducer = (state, action) =>{

	switch(action.changeIncrease){
		case 'plus':
		return {...state,counter:state.counter+action.type};
		case 'minus':
		return {...state,counter:state.counter-action.type};

		default:
		return state;
	}
};
const CounterScreen =() =>{

const [state,dispach] = useReducer(reducer,{counter:0})
	return (<View>
		<Button title="increase" onPress={() =>{ dispach({ changeIncrease:'plus',type:1})}}/>
		<Button title="descrease" onPress={() =>{dispach({  changeIncrease:'minus',type:1})}}/>
		<Text>{state.counter}</Text>
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