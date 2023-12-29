// this wrapper makes sure all the children inside it such as text input will not be overlayed by the virtual keyboard
import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { keyboardAvoidingWrapper  as styles } from './css';
import { useHeaderHeight } from '@react-navigation/elements'
const KeyboardAvoidingWrapper = ({children, ...prop}) => {
  const height = useHeaderHeight()
 return (<KeyboardAvoidingView style={styles.container} behavior="padding" {...prop}>
      {children}
  </KeyboardAvoidingView>)
}
export default KeyboardAvoidingWrapper;