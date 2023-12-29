//this file will make an edit btn component that will be displayed at the bottom right of the user profie picture
import React from 'react';
import {TouchableOpacity,  } from 'react-native';
import { editBtnSettings } from '../profileUrl';
import { editProfileBtn as styles } from '../css';
import AvatarIcon from '../../../components/AvatarIcon';
const EditProfileBtn = () => (
  <TouchableOpacity style={styles.editProfilePictureButtonView}>
    <AvatarIcon avatarSettings={editBtnSettings}/>
  </TouchableOpacity>
)
export default EditProfileBtn;