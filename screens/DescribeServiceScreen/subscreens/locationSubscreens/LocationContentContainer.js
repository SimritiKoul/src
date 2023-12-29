/**
 * LocationContentContainer component.
 * A container that stores all the location options for the provided resource.
 *
 * @param {React.ReactNode} children - The children components to be rendered within the container.
 * @returns {JSX.Element} - The rendered location content container.
 */

import React from 'react';
import { View } from 'react-native';
import { location as styles } from '../../css';

const LocationContentContainer = ({children}) => (
  <View style={styles.contentContainer}>
    {children}
  </View>
)

export default LocationContentContainer;