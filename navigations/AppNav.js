/**
 * @file AppNav.js
 * @description This file defines the main navigation logic of the application based on the user's authentication status.
 */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import PickLanguages from '../screens/PickLanguageScreen/PickLanguages';
import BottomNavigation from './BottomNavigation';
import LoginSignupScreen from '../screens/LoginSignupScreen/LoginSignupScreen';
import { useAuth } from '../context/AuthProvider';
import LoadingActivity from '../components/LoadingActivity';

/**
 * @component AppNav
 * @description The main navigation component that handles the navigation flow based on the user's authentication status.
 */
const AppNav = () => {
  const Stack = createStackNavigator()
  //get the state variable from AuthProviderContext to check the user's authentication status
  const {isLoggedIn, isLoading} = useAuth()
  //displays loading state while connecting to backend
  if (isLoading) {
    return <LoadingActivity/>
  }

  if (isLoggedIn) {
    // If the user is logged in, show the main app navigation with bottom tabs.
    return <PaperProvider><BottomNavigation/></PaperProvider>;
  } else {
    //If the user is not logged in, show the language selection and login/signup screens.
    return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name='LoginSignup'>
          {() => <LoginSignupScreen/>}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
    );
  }
}
export default AppNav;