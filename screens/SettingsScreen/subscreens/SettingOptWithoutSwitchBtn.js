//this file will create a component without the switch on the Setting screen that represents a setting option which allows user to perform some actions on the setting screens such as navigating to the SettingConnected screen, SettingLanguage screen.
import React from 'react';
import { View, TouchableOpacity} from 'react-native';
import { Text } from 'react-native-paper';
import { arrowRight } from '../icons';
import { settingOpt as styles } from '../css';
const SettingOptWithoutSwitchBtn = ({title, onPress}) => (
  <TouchableOpacity
          style={styles.settingOptContainer}
          onPress={onPress}>
          <Text
            style={styles.settingOptText}>
            {title}
          </Text>
          <View
            style={styles.settingButton}>
              {arrowRight}
          </View>
  </TouchableOpacity>
)
export default SettingOptWithoutSwitchBtn;