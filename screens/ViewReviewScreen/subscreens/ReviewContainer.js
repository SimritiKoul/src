//this file will make a container component which wraps around all the content of the review screen
import React from 'react';
import { View} from 'react-native';
import { reviewContainer as styles } from '../css';
const ReviewContainer = ({children}) => (
  <View style={styles.container}>
    {children}
  </View>
)
export default ReviewContainer;