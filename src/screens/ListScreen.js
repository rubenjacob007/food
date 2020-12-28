import React from 'react';
import { Text,View,StyleSheet,FlatList} from 'react-native';

const ListScreen = () => {
const friends = [
{name: "Friend 1",age:"AGE 21"},
{name: "Friend 2",age:"AGE 22"},
{name: "Friend 3",age:"AGE 23"},
{name: "Friend 4",age:"AGE 24"},
{name: "Friend 5",age:"AGE 25"},
];
	return(
	<FlatList 
	horizontal
 data ={friends}
keyExtractor = {friend => friend.name}
 renderItem={({ item }) =>{

  return <Text style={styles.Text}>{item.name} - {item.age}</Text>;
 }}
/>
);

}

const styles = StyleSheet.create({
	Text:{

		marginVertical:50
	}
});

export default ListScreen;