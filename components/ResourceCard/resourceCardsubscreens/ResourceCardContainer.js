//make a container that will wrap around all the resource card stuffs
import React from 'react';
import { View} from 'react-native';
import { resourceCard as styles } from '../../css';

const ResourceCardContainer = ({children}) => (
  <View style={styles.resourceCardContainer}>
      {children}
  </View>)
export default ResourceCardContainer;