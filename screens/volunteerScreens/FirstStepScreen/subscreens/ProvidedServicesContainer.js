//this file will make a container that wraps around all the service card components
import React from 'react';
import { View} from 'react-native';
import { cardContainer as styles } from '../css';
const ProvidedServicesContainer = ({children}) => (
  <View style={styles.providedServicesContainer}>
    {children}
  </View>
)
export default ProvidedServicesContainer;