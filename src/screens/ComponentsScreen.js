import React from 'react';
import {Text,View,StyleSheet} from 'react-native';

const ComponentsScreen = ()=> {
const name = <Text style={styles.textsubheader}>"RubenKs"</Text>;
	return (<View>
	<Text style={styles.text}>"Ruben"</Text>
	{name}
	</View>
	);

};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
   textsubheader: {
    fontSize: 10
  },
}); 
export default ComponentsScreen;