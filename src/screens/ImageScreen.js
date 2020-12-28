import React from 'react';
import {Text,View,StyleSheet} from 'react-native';
import ImageDetail from "../components/ImageDetail";
const ImageScreen = ()=> {

	return (<View>
	<ImageDetail title="forest" imageSource={require('../../images/beach.jpg')} imageScore="10"/>
  <ImageDetail title="mountain" imageSource={require('../../images/forest.jpg')} imageScore="10"/>
  <ImageDetail title="zoo" imageSource={require('../../images/mountain.jpg')} imageScore="10"/>
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
export default ImageScreen;