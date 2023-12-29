import React, {useLayoutEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfilePage from '../screens/ProfileScreen/ProfilePage';
import SettingsNavigation from './SettingsNavigation';
import EditProfile from '../screens/EditProfileScreen/EditProfile'
import Header from './Header';
import BookmarkedServices from '../screens/BookmarkedScreen/BookmarkedServices';
import HelpPage from '../screens/HelpScreen/HelpPage';
import AddServicesNavigation from './servicesNavigation/AddServicesNavigation';
import {getFocusedRouteNameFromRoute, useNavigation, useRoute} from "@react-navigation/native";
const Stack = createStackNavigator();
const ProfileNavigation = () => {
  const navigation = useNavigation();
  const route = useRoute();

  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    const shouldHideTabBar = routeName === 'View Published Service';

    navigation.setOptions({
      tabBarStyle: { display: shouldHideTabBar ? 'none' : 'flex' },
    });
  }, [navigation, route]);

  return (
    <Stack.Navigator>
      {/* Profile */}
      <Stack.Screen name='Profile' component={ProfilePage} options={{headerShown:false}}/>

      {/* Edit Profile */}
      <Stack.Screen  name='EditProfile' component={EditProfile} options={{header: ({navigation}) => (
        <Header navigation={navigation} title={'Profile'}/>
      )}}/>

      {/* View Published Service */}
      <Stack.Screen name='View Published Service' component={AddServicesNavigation} options={{headerShown:false}} />

      {/* Bookmarked Services
      <Stack.Screen /> */}
      <Stack.Screen name='BookmarkedServices' component={BookmarkedServices} options={{header: ({navigation}) => (
        <Header navigation={navigation} title={'Bookmarked Services'}/>
      )}}/>

      {/* Settings */}
      <Stack.Screen name='SettingsNavigation' component={SettingsNavigation} options={{headerShown: false}}/>

      {/* Help */}
      <Stack.Screen name='Help' component={HelpPage} options={{header: ({navigation}) => (
        <Header navigation={navigation} title={'Profile'}/>
      )}}/>

      {/* Log out */}
      {/* <Stack.Screen /> */}
      
    </Stack.Navigator>
    
  );
}
export default ProfileNavigation;