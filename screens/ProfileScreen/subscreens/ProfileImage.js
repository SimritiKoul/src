//this file will make the small view that lies inside the upper part of the profile screen that includes the user avatar and the edit button. 
import React from 'react';
import { Button } from 'react-native-paper';
import ProfileImagePortion from './ProfileImagePortion';
import AvatarIcon from '../../../components/AvatarIcon';
import { editBtn as styles } from '../css';
import img from '../../../images/Reslogo.png'
import { Image } from 'react-native'
//settings for user avatar
const profileUrl = Image.resolveAssetSource(img).uri //mockup picture for avatar
const avatarSettings = {
  source : profileUrl, 
  size: 150 
}
const ProfileImage = ({navigation}) => (
  <ProfileImagePortion>
    {/* user avatar */}
    <AvatarIcon avatarSettings={avatarSettings}/>
    {/* edit profile button */}
    <Button mode='elevated' labelStyle={styles.editButtonTxt} style={styles.editButton} onPress={() => navigation.navigate('EditProfile')}>
        edit profile
    </Button>
  </ProfileImagePortion>
)
export default ProfileImage;