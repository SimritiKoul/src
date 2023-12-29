//this file will make a container which wraps around all the content of a single section on the Write Review Screen
import React from 'react';
import { View } from 'react-native';
import { sectionContainer as styles } from '../css';
const SectionContainer = ({children}) => (
  <View style={styles.sectionContainer}>
    {children}
  </View>
)
export default SectionContainer;