//this file will render a list of image picker components
import React from 'react';
import { ScrollView } from 'react-native';
import ImageInput from './ImageInput';
const ImageInputList = ({imageUris = [], onRemoveImage, onAddImage, style,...scrollViewProps}) => {

  return (
    <ScrollView horizontal>
        {imageUris.map(uri => (
            <ImageInput imageUri={uri} onChangeImage ={() => onRemoveImage(uri)} key={uri}/>
          ))}
          <ImageInput onChangeImage={(uri) => onAddImage(uri)}/>
    </ScrollView>

  );

}
export default ImageInputList;