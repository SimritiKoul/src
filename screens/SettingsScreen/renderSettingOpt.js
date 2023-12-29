//this function will help to decide what type of setting opt is returned based on the given argument
import SettingOptWithSwitchBtn from "./subscreens/SettingOptWithSwitchBtn"
import SettingOptWithoutSwitchBtn from "./subscreens/SettingOptWithoutSwitchBtn"
export const renderSettingOpt = (opt, i, navigation) => {
  if (opt.title === 'Push Notification' || opt.title === 'Dark Mode') return <SettingOptWithSwitchBtn title={opt.title} key={i.toString()}/>
  else return <SettingOptWithoutSwitchBtn title={opt.title} onPress={() => navigateToScreens(navigation, opt.navigateTo)} key={i.toString()}/>
}

const navigateToScreens = (navigation, navigateTo) => navigation.navigate(navigateTo)