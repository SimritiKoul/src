//this file will render a view that wraps around all the contents of the describeService page
import React from 'react';
import {TouchableWithoutFeedback, View, Keyboard} from 'react-native';
import { describeServicePageContainer as styles } from '../css';
const DescribeServicePageContainer = ({children}) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.describeServicePageContainer}>
      {children}
    </View>
  </TouchableWithoutFeedback>
)
export default DescribeServicePageContainer;