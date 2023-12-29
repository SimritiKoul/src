//this file will make the lower pard of the profile screen, which includes several profile option cards that allows user to perform some actions on the profile screen such as navigating to bookmarked services, settings or loging out
import React from 'react';
import { View } from 'react-native';
import { profileOptionsContainer as styles } from '../css';
const ProfileOptionsPortion = ({children}) => (
  <View style={styles.profileOptContainer}>
    {children}
  </View>
)
export default ProfileOptionsPortion;