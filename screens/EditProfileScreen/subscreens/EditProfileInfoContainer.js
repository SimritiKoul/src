//this file will make a container component that wraps around all the profile info fields on the Edit Profile screen
import React from 'react';
import { View } from 'react-native';
import { editProfileInfoContainer as styles } from '../css';
const EditProfileInfoContainer = ({children}) => (
  <View style={styles.editProfileInfoContainer}>
      {children}
  </View>
)

export default EditProfileInfoContainer;