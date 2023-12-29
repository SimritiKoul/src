//this file will make a container component which wraps around all the content of the Setting screen
import React from 'react';
import { View } from 'react-native';
import { settingContainer as styles } from '../css';
const SettingContainer = ({children}) => (
  <View style={styles.container}>
      <View style={styles.settingContainer}>
        {children}
      </View>
  </View>
)

export default SettingContainer;