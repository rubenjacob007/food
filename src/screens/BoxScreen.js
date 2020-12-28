import * as React from 'react';
import { Text,View,Button, StyleSheet } from "react-native";

const BoxScreen = () =>{

 return (
 	<View style={styles.ParentView}>
         <View style={styles.childone}/> 
         <View style={styles.childtwo}/>
         <View style={styles.childthree}/>
 

    </View>
   );  

}

const styles = StyleSheet.create({
ParentView: {

	borderColor:'black',
	borderWidth:3,
	flexDirection: 'row',
	height:200,
justifyContent:'space-between'},
childone: {

	borderColor:'black',
	borderWidth:3,
	height:50,
	width:50
},
childtwo: {

	borderColor:'black',
	borderWidth:3,
	height:50,
	width:50,
	top:50
},
childthree: {

	borderColor:'black',
	borderWidth:3,
	height:50,
	width:50
},


})

export default BoxScreen;