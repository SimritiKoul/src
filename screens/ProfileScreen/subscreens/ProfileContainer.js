//this file will make a container component that wraps around all the content of the profile screen
import React from 'react';
import { View } from 'react-native';
import { profileContainer as styles } from '../css';
const ProfileContainer = ({children}) => (
  <View style={styles.profileContainer}>
    {children}
  </View>
)
export default ProfileContainer;