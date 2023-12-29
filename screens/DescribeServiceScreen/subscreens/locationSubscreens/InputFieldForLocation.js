/**
 * InputFieldForLocation component.
 * Renders an input field for entering the resource's location.
 *
 * @param {...TextInputProps} inputFieldProps - Additional props to pass to the TextInput component.
 * @returns {JSX.Element} - The rendered input field for location.
 */

import React from 'react';
import {View, TextInput} from 'react-native';
import { location as styles } from '../../css';
import { locationIcon } from '../../icons';
import { useResourceContext } from '../../../../context/ResourceProvider';
import updateResource from '../../../../utils/updateResource';
const InputFieldForLocation = ({...inputFieldProps}) => {
  //get resource-related state variable and function to change the value of the state
  const {resource, dispatch} = useResourceContext()

  return (
    <View 
          style={styles.inputFieldForLocation}>
            {/* location icon */}
            {locationIcon}
            {/* text input field for location */}
            <TextInput 
                      style={styles.locationTextInput} 
                      clearButtonMode='always' 
                      {...inputFieldProps} 
                      value={resource.address} 
                      onChangeText={(newText) => {
                                                      updateResource(dispatch, {field: 'address', value: newText})
                                                }}/>
    </View>
  );
}
export default InputFieldForLocation;