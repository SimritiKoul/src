/**
 * TitleForTimePickingField component.
 * Renders the title for the picking hour field.
 *
 * @param {string} title - The title text to be displayed.
 * @returns {JSX.Element} - The rendered title.
 * Used inside the TimePickingFieldForDay component to render the day name of the field
 */

import React from 'react';
import { Text } from 'react-native-paper';
import { hour as styles } from '../../css';
const TitleForTimePickingField = ({title}) => (
  <Text style={styles.titleForTimePickingField}>
      {title}
  </Text>
)
export default TitleForTimePickingField;