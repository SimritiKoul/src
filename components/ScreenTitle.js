//render the title message for screens which have title
import React from 'react';
//import { View} from 'react-native';
import { Text } from 'react-native-paper';
import { screenTitle as styles } from './css';
const ScreenTitle = ({titleMessage, style, ...textProps}) => (
  <Text style={[styles.screenTitle, style]} {...textProps}>{titleMessage}</Text>
)

export default ScreenTitle;