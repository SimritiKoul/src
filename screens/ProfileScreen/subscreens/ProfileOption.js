// this file will make a profile option card which allows user to perform some actions on profile screen such as navigating to bookmarked services, settings or loging out
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import getOptionIcon from './getOptionIcon';
import {Text} from 'react-native-paper';
import {keyboardArrowRightIcon} from '../icons';
import {profileOption as styles} from '../css';

const ProfileOption = ({optionName, navigateTo, iconName, navigation, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.rowContainer}>
      {getOptionIcon(iconName)}
      <View style={styles.optionTextContainer}>
        <Text style={styles.optionText}>{optionName}</Text>
      </View>
      {keyboardArrowRightIcon}
    </TouchableOpacity>
  );
}
export default ProfileOption;