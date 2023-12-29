
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import MapScreen from '../screens/MapScreen/MapScreen';
import ProfileNavigation from './ProfileNavigation';
import HomeScreenNavigation from './HomeScreenNavigation';



const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: "#2f95dc",
          tabBarVisible: false
      }}
      > 
        {/* <Tab.Screen
          name="Map"
          component={MapScreen}
          options={{
            tabBarLabel: "Map",
            tabBarIcon: ({ color, size }) => (
              <Icon name="map-outline" color={color} size={size} />
            ),
            headerShown: false,
          }}
        /> */}
        <Tab.Screen
          name="Home"
          component={HomeScreenNavigation}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <Icon name="home-outline" color={color} size={size} />
            ),
            headerShown:false,
          }}
        />
        <Tab.Screen
          name="ProfileNavigation"
          component={ProfileNavigation}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <Icon name="person-outline" color={color} size={size} />
            ),
            headerShown:false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default BottomNavigation;
