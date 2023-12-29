import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import AnyResource from '../screens/services/AnyResource';
import AddServicesNavigation from './servicesNavigation/AddServicesNavigation';
import ServicesFullPage from '../screens/ServiceFullPageScreen/ServicesFullPage';
const Stack = createStackNavigator();

const HomeScreenNavigation = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="HomeScreen" component={HomeScreen} />

    <Stack.Screen name='ViewResource' component={ServicesFullPage}/>

    <Stack.Screen name="AnyResource" component={AnyResource} />

    <Stack.Screen name='View Published Service' component={AddServicesNavigation}/>
  </Stack.Navigator>
);

export default HomeScreenNavigation;
