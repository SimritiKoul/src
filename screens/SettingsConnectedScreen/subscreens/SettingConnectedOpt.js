//this file will create a component on the SettingConnected screen that represents a setting option which allows user to set their preferred settings in the app.
import React from 'react';
import { View} from 'react-native';
import { Text } from 'react-native-paper';
import Switch from '../../../components/Switch'
import { settingConnectedOpt as styles } from '../css';
const SettingConnectedOpt = ({connectedOptName}) => (
  <View style={styles.rowContainer}>
    {/* name of the setting option */}
    <Text style={styles.text}>{connectedOptName}</Text>
    {/* switch ON/OFF */}
    <Switch/>
  </View>
)
export default SettingConnectedOpt;