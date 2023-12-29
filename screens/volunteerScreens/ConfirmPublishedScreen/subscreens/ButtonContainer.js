//this file will make a view component that will be used to store two buttons on the Published screen
import React from 'react';
import { View } from 'react-native';
import { button as styles } from '../css';
const ButtonContainer = ({children}) => (
  <View style={styles.buttonContainer}>
    {children}
  </View>
)
export default ButtonContainer;