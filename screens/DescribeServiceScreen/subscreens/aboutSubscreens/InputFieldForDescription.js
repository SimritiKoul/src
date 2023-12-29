/**
 * @file InputFieldForDescription.js
 * @description This file contains a text input component used for entering the description of a resource.
 */

import React from 'react';
import { TextInput } from 'react-native';
import { about as styles } from '../../css';
import { useResourceContext } from '../../../../context/ResourceProvider';
import updateResource from '../../../../utils/updateResource';

const InputFieldForDescription = () => {
  //get resource-related state variables and a function to change the value of the state
  const {resource, dispatch} = useResourceContext()
  return (
    <TextInput 
              style={styles.descriptionTextInput} 
              multiline clearButtonMode='always' //if the text hits the end of its container, it will open the new line
              maxLength={1000} //max length of this input is 1000 characters
              value={resource.description} // the displayed text on the text input
              onChangeText={(newText) => {
                                            //update the value of description field in resource-related state variable every time the value of it is changed
                                            updateResource(dispatch, {field: 'description', value: newText})
                                          }} />
  );
}
export default InputFieldForDescription;