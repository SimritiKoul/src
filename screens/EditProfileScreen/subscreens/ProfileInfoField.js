//this file will make a field that displays the user's info on the edit profile screen 
import React from 'react';
import { View, TextInput } from 'react-native';
import { Text } from 'react-native-paper';
import { editProfileInfo as styles } from '../css';
const ProfileInfoField = ({title, content, ...textInputProp}) => (
  <View style={styles.editProfileInfoField}>
    <Text style={styles.editProfileInfoTitle}>{title}</Text>
    <TextInput style={styles.contentTextStyle} value={content} {...textInputProp}/>
  </View>
)
export default ProfileInfoField;