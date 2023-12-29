/**
 * @file InputBox.js
 * @description This file contains a component that wraps input fields for the login and sign-up screens.
 */

import React from 'react';
import { View} from 'react-native';
import { inputBox as styles } from '../css';
const InputBox = ({children, style}) => (
  <View style={[styles.inputBox, style]}>
    {children}
  </View>
)
export default InputBox;