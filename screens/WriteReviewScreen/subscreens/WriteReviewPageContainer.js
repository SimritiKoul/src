//this file will make a container component that wraps around all the content of the Write Review screen 
import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { writeReviewPageContainer as styles } from '../css';
const WriteReviewPageContainer = ({children}) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      {children}
    </View>
  </TouchableWithoutFeedback>
)
export default WriteReviewPageContainer;