/**
 * @file Container.js
 * @description This file contains a container component that wraps all the contents of screens in this folder.
 */

import React from 'react';
import { View, Keyboard, TouchableWithoutFeedback} from 'react-native';
import { container as styles } from '../css';
const Container = ({children}) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}> 
      {children}
    </View>
  </TouchableWithoutFeedback>
)
export default Container;