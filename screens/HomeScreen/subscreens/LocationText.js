//this file will make a view component that displays the location text under the search bar on the homescreen 
import React, {useState} from 'react';
import { View, Pressable} from 'react-native';
import { locationText as styles } from '../css';
import {locationIcon} from '../icons'
import { getSpecificStyleForlocationText, handleLocationTextBlurred, handleLocationTextFocused } from './underlineLocationText';
import { Text } from 'react-native-paper';
//this component receives a location prop which is the name of the user's location 
const LocationText = ({location}) => {
  const [isFocus, setIsFocus] = useState(false) //this state variable is used for style conditional rendering. If this variable is set to true, the location text will be underlined, otherwise, there will be no line rendered under it
  return (
    // container
    <View style={styles.locationSignContainer}>
        {/* location icon */}
        {locationIcon}
        <View style={styles.locationTextContainer}>
          {/* location text */}
          <Pressable
            onPressIn={() => handleLocationTextFocused(setIsFocus)}
            onPressOut={() => handleLocationTextBlurred(setIsFocus)}
            >
            <Text
              style={getSpecificStyleForlocationText(isFocus)}
              >
                {location}
            </Text>
          </Pressable>
        </View>
    </View>
  );
}
export default LocationText;