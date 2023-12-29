//this file will make a container component that wraps around the all the content of the edit profile screen
import React from 'react';
import { View } from 'react-native';
import { editProfileContainer as styles } from '../css';
const EditProfileContainer = ({children}) => (
  <View style={styles.editProfileContainer}>
    {children}
  </View>
)
export default EditProfileContainer;