//this file will create a container component that wraps around all the content rendered on the HomeScreen
import React from 'react';
import { SafeAreaView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { homeScreenContainer as styles} from '../css';
const HomeScreenContainer = ({children}) => {
  return (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.homeScreenContainer}>
        {children}
      </SafeAreaView>
  </TouchableWithoutFeedback>
  );
}
export default HomeScreenContainer;