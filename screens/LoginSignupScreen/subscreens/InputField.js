/**
 * @file InputField.js
 * @description This file contains a component for input fields used in the login and sign-up screens.
 */

import React from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { inputField as styles } from '../css';
import { inputBox } from '../css';
import { eye, eye_off } from '../icons';
import { useAuth } from '../../../context/AuthProvider';

/**
 * @component InputField
 * @description A component for input fields used in the login and sign-up screens.
 * @param {object} props - The component props.
 * @param {boolean} [props.showPassword] - A function to toggle the visibility of the password.
 * @param {boolean} [props.passwordInvisible] - Determines whether the password input is invisible and also whether this text input is for password.
 * @param {object} props.textInputProps - Props to be passed to the TextInput component.
 */
const InputField = ({showPassword, passwordInvisible, ...textInputProps}) => {
  //get the authentication variable from AuthProvider context
  const {inLoginPage} = useAuth()
  return (
    <View>
      <TextInput {...textInputProps} style={styles.input}/>
      {typeof passwordInvisible === 'boolean'  && inLoginPage ? //enable showPassword functionality only in the LoginPage 
                                  <TouchableOpacity 
                                                  style={inputBox.showPasswordEyeIcon} 
                                                  onPress={
                                                    //show password in the login page when the eye icon is pressed
                                                    showPassword
                                                    }>
                                        {passwordInvisible ? eye_off : eye}
                                  </TouchableOpacity>
                                  : null}
    </View>
  )
}
export default InputField;