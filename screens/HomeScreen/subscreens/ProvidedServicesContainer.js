//this file will make a container component that wraps around all the supported services on the HomeScreen
import React from 'react'; 
import {View} from 'react-native';
import { providedServicesContainer as styles} from '../css';
const ProvidedServicesContainer = ({children}) => (
  <View style={styles.servicesContainer}>
      {children}
  </View>  
)

export default ProvidedServicesContainer;