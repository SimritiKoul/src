//this file will make a container component which wraps around all the content of the FirstStep screen
import React from 'react';
import { SafeAreaView } from 'react-native';
import { firstStepScreenContainer as styles } from '../css';
const FirstStepScreenContainer = ({children}) => (
  <SafeAreaView style={styles.container}>
    {children}
  </SafeAreaView>
)
export default FirstStepScreenContainer;