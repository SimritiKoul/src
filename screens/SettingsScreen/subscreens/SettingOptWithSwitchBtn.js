//this file will create a component with the switch on the Setting screen that represents a setting option which allows user to perform some actions on the setting screens such as turning on/off push notification, darkmode, etc
import { View} from 'react-native';
import { Text } from 'react-native-paper';
import { settingOpt as styles } from '../css';
import Switch from '../../../components/Switch';
const SettingOptWithSwitchBtn = ({title}) => {
  return (
  <View
      style={styles.settingOptContainer}>
      <Text
        style={styles.settingOptText}>
        {title}
      </Text>
      <Switch/>
  </View>)
}
export default SettingOptWithSwitchBtn;