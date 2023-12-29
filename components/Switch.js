//This file will render a custom switch component that will be used for setting screen and setting connected screens
import React, {useState} from 'react';
import CustomSwitch from 'react-native-custom-switch';
import { View } from 'react-native';
import { switchStyle as styles } from './css';
import { colors } from '../base';
const Switch = () => {
  const [pushNotification, setPushNotification] = useState(false);
  return (<View>
        <CustomSwitch
          buttonWidth={30}
          switchLeftText={"ON"}
          switchLeftTextStyle={styles.switchBtnText}
          switchRightText={"OFF"}
          switchRightTextStyle={styles.switchBtnText}
          switchWidth={80}
          buttonPadding={4}
          buttonColor={colors.white}
          startOnLeft={pushNotification} //set the default of the switch value is off
          switchBackgroundColor={colors.switchOff} //default background color of the switch when it's off
          onSwitchBackgroundColor={colors.switchOn} //change background color of the switch when it's on
          onSwitch={setPushNotification} //called when the switch is pressed
        />
  </View>)
}
export default Switch;