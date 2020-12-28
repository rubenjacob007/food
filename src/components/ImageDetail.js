import React from 'react';
import {Text,View,StyleSheet,Image} from 'react-native';

const ImageDetail = ({imageSource,title,imageScore})=> {
	return (<View>
    <Image style={styles.container} source={imageSource}/>
	<Text style={styles.text}>{title}</Text>
  <Text style={styles.text}>Image Score - {imageScore}</Text>

	</View>
	);

};

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
  },
  stretch: {
    width: 100,
    height: 100,
    resizeMode: 'stretch',
  },
});
export default ImageDetail;