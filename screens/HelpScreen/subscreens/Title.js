//this file will make a text component that will display the title for the help screen
import React from 'react';
import { Text } from 'react-native-paper';
import { title as styles} from '../css';
const Title = ({title}) => (
  <Text style={styles.title}>{title}</Text>
)
export default Title;