//this file will make a view that displays the user profile picture and the edit button on the edit profile screen
import React from 'react';
import AvatarIcon from '../../../components/AvatarIcon'
import { avatarSettings } from '../profileUrl';
import { View } from 'react-native';
import EditProfileBtn from './EditProfileBtn';
import { editProfile as styles } from '../css';
const ProfilePicture = () => (
  <View style={styles.editProfilePictureContainer}>
    <AvatarIcon avatarSettings={avatarSettings}/>
    <EditProfileBtn/>
  </View>
  
)
export default ProfilePicture;