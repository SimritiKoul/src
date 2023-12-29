//this file will make a container component which wraps around all the content of the Published screen
import React from 'react';
import { View } from 'react-native';
import { confirmPublishedContainer as styles } from '../css';
const ConfirmPublishedScreenContainer = ({children}) => (
  <View style={styles.confirmPublishedContainer}>
    {children}
  </View>
)
export default ConfirmPublishedScreenContainer;