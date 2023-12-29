//this file will make a container component that wraps around all the content of the pick language screen 
import React from 'react';
import { SafeAreaView} from 'react-native';
import {pickLanguageContainerStyle as styles} from '../css'

const PickLanguageContainer = ({children}) => (
  <SafeAreaView style={styles.container}>
    {children}
  </SafeAreaView>
)
export default PickLanguageContainer;