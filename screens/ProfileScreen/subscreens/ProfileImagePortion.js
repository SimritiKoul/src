//this file will make the upper part of the profile screen, which includes the user avatar and the edit button. 
import React from 'react';
import { View} from 'react-native';
import { imageContainer as styles } from '../css';
const ProfileImagePortion = ({children}) => (
  <View style={styles.imgContainer}>
    {children}
  </View>
)
export default ProfileImagePortion;