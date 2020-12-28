import React, {useState} from 'react'
import {Text,View,StyleSheet,TextInput} from 'react-native';

const TextScreen = () => {
	const [name,Setname] = useState('');
return (<View>
   <TextInput style={styles.text}
    value={name}
    onChangeText={newText=>Setname(newText)}
   />
   <Text>{name.length <= 4 ? <Text>Enter 4 </Text> : null}</Text>
</View>
);
}

const styles = StyleSheet.create({
  text: {
    margin: 30,
    borderColor:'black',
    borderWidth:1,
  }
});

export default TextScreen;