/**
 * @file ForgotPasswordText.js
 * @description This file represents the "Forgot Password?" text link displayed under the password input field.
 */

import React from 'react';
import { TouchableOpacity } from 'react-native';
import { forgotPass as styles } from '../css';
import { Text } from 'react-native-paper';


const ForgotPasswordText = () => (
  <TouchableOpacity>
      <Text style={styles.forgotPass}>Forgot Password?</Text>
  </TouchableOpacity>
)
export default ForgotPasswordText;