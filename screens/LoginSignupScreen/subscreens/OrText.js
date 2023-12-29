/**
 * @file OrText.js
 * @description This file contains a component for displaying the 'Or' text message on both the sign-up and login screens.
 */

import React from 'react';
import { Text } from 'react-native-paper';
import { orText as styles } from '../css';
const OrText = () => (
  <Text style={styles.orText}> OR </Text>
)
export default OrText;