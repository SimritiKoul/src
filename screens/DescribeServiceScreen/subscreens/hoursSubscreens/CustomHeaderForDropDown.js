/**
 * Header component for the dropdown hour.
 *
 * This component displays a customized header title within the dropdown hour.
 *
 * @component
 * @param {string} headerTitle - The title to be displayed in the header.
 * @example
 * // Use this component to display a customized header in the dropdown hour
 * <CustomHeaderForDropDown headerTitle="Select Opening Time" />
 */

import React from 'react';
import { Text } from 'react-native-paper';
import { View } from 'react-native';
import { hour as styles } from '../../css';
const CustomHeaderForDropDown = ({headerTitle}) => (
  <View 
        style={styles.customHeaderForDropDownView}>
    <Text 
        variant='headlineMedium' 
        style={styles.customHeaderForDropDown}>
                {headerTitle}
    </Text>
  </View>
)
export default CustomHeaderForDropDown;