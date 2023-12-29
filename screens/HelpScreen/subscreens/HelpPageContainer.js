//this file will make a container component that wraps around all the contents rendered on the help screen
import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { helpScreenContainer as styles } from '../css';
const HelpPageContainer = ({children}) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.helpPageContainer}>
      {children}
    </View>
  </TouchableWithoutFeedback>
)
export default HelpPageContainer;