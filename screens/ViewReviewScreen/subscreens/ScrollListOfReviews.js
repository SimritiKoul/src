//this file will make a container component which wraps around all the reviews of the resource
import React from 'react';
import { View, ScrollView} from 'react-native';
import { listOfReviewsContainer as styles } from '../css';
const ScrollListOfReviews = ({children}) => (
  <View style={styles.container}>
    <ScrollView>
      {children}
    </ScrollView>
  </View>
)
export default ScrollListOfReviews;