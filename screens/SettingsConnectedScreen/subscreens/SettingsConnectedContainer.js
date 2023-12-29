//this file will make a container component which wraps around all the content of the SettingsConnected screen
import React from 'react';
import { View} from 'react-native';
import { settingConnectedContainer as styles } from '../css';
const SettingsConnectedContainer = ({children}) => (
  <View style={styles.settingConnectedcontainer} >
    {children}
  </View>
)
export default SettingsConnectedContainer;