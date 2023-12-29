import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Settings from '../screens/SettingsScreen/Settings';
import SettingsConnected from '../screens/SettingsConnectedScreen/SettingsConnected'
import SettingsLanguage from '../screens/SettingsLanguageScreen/SettingsLanguage'
import PrivacyAgreementScreen from '../screens/PolicyScreens/PrivacyAgreementScreen'
import TermsOfServiceScreen from '../screens/PolicyScreens/TermsOfServiceScreen'
import Header from './Header';
const Stack = createStackNavigator();
const SettingsNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Settings' component={Settings} options={{header: ({navigation}) => (
        <Header navigation={navigation} title={'Settings'}/>
      )}}/>
      <Stack.Screen name= 'Language' component={SettingsLanguage} options={{header: ({navigation}) => (
        <Header navigation={navigation} title={'Settings'}/>
      )}}/>
      <Stack.Screen name='ConnectedAccount' component={SettingsConnected} options={{header: ({navigation}) => (
        <Header navigation={navigation} title={'Settings'}/>
      )}}/>
      <Stack.Screen name='PrivacyAgreementScreen' component={PrivacyAgreementScreen} options={{header: ({navigation}) => (
        <Header navigation={navigation} title={'Privacy & Security'}/>
      )}}/>
      <Stack.Screen name='TermsOfServiceScreen' component={TermsOfServiceScreen} options={{header: ({navigation}) => (
        <Header navigation={navigation} title={'Terms of Services'}/>
      )}}/>
    </Stack.Navigator>

  );
}



export default SettingsNavigation;