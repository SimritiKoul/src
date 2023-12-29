//this file will make a container that wraps around all the content of the get started screen
import React from 'react';
import { View } from 'react-native';
import { getStartedContainer as styles } from '../css';
const GetStartedContainer = ({children}) => (
  <View style={styles.container}>
    {children}
  </View>
)
export default GetStartedContainer;