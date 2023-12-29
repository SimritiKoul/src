//this file will make the section tile that is displayed in each section on the Write Review screen
import React from 'react';
import { Text } from 'react-native-paper';
import { sectionTitle as styles } from '../css';
const SectionTitle = ({title}) => (
  <Text style={styles.title}>{title}</Text>
)
export default SectionTitle;