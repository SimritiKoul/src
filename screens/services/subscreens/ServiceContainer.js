//this file will make a container component which wraps around all the content of the service screen
import React from 'react';
import { View } from 'react-native';
import { service as styles } from '../css';
function ServiceContainer({children}) {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
}
export default ServiceContainer;