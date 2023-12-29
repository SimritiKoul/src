/**
 * @file AboutContentContainer.js
 * @description This file contains a container component that stores all the content of the "About" section.
 */

import React from 'react';
import { View } from 'react-native';
import { about as styles } from '../../css';

const AboutContentContainer = ({children}) => (
  <View style={styles.contentContainer}>
    {children}
  </View>
)
export default AboutContentContainer;