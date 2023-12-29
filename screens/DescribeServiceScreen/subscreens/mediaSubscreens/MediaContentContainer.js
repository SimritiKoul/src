/**
 * MediaContentContainer component.
 * Represents a container that stores all the media options for a provided resource.
 *
 * @param {React.ReactNode} children - The children components to be rendered within the container.
 * @returns {React.ReactNode} - The MediaContentContainer component.
 */

import React from 'react';
import { View} from 'react-native';
import { media as styles } from '../../css';
const MediaContentContainer = ({children}) => (
  <View 
        style={styles.contentContainer}>
            {children}
  </View>
)
export default MediaContentContainer;