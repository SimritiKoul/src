/**
 * A container component for storing all the days and picking hour fields.
 *
 * This container component is used to wrap and organize the days and picking hour fields.
 *
 * @param {ReactNode} children - The children components to be rendered inside the container.
 * @returns {JSX.Element} - Returns a JSX element representing the container.
 * @example
 * // Usage within a component's JSX
 * <HourContentContainer>
 *   <TimePickingFieldForDay/>
 * </HourContentContainer>
*/

import React from 'react';
import { View} from 'react-native';
import { hour as styles } from '../../css';
const HourContentContainer = ({children}) => (
  <View style={styles.hourContentContainer}>
    {children}
  </View>
)
export default HourContentContainer;