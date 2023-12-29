/**
 * InputFieldForMedia component.
 * Represents a text input field for entering resource's media-related information.
 *
 * @param {string} mediaicon - The name of the media icon.
 * @param {...TextInputProps} inputFieldProps - Other props for the TextInput component.
 * @returns {React.ReactNode} - The InputFieldForMedia component.
 */

import React from 'react';
import { View, TextInput } from 'react-native';
import { media as styles } from '../../css';
import { getVectorIconBasedOnParam } from './functions';
const InputFieldForMedia = ({mediaicon, ...inputFieldProps}) => {
  return (
    // a view that wraps around the text input
    <View 
          style={styles.inputFieldForMedia}>
              {/* media icon */}
              {getVectorIconBasedOnParam(mediaicon)}
              {/* text input for media */}
              <TextInput 
                        style={styles.mediaTextInput} 
                        clearButtonMode='always' 
                        {...inputFieldProps}/>
    </View>
  );
}
export default InputFieldForMedia;