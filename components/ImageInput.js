//This file will create an image picker component. Use this component to allow user to pick and load the image in their device
import React from 'react';
import { View, Image, TouchableWithoutFeedback } from 'react-native';
import handleImageClicked from './handleImageClicked';
import { cameraIcon } from './icons';
import { imageInput as styles } from './css';
const ImageInput = ({imageUri, onChangeImage}) => {
  return (
    //user will be asked for photo access permission before letting them pick the image
    <TouchableWithoutFeedback onPress={() => handleImageClicked(onChangeImage, imageUri)}>
      <View style={styles.imageInputContainer}>
        {!imageUri && cameraIcon}
        {imageUri && <Image source={{uri: imageUri}} style={styles.image} resizeMode='cover'/>}
      </View>
   </TouchableWithoutFeedback>
  );
}
export default ImageInput;