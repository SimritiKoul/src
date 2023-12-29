//make a component that will wrap around all the content of resource card such as location, title, contact info,..
import React from 'react';
import { View} from 'react-native';
import { resourceCard as styles } from '../../css';
const ResourceCardContent = ({children}) => (
  <View style={styles.resourceCardContent}>
    {children}
  </View>
)
export default ResourceCardContent;