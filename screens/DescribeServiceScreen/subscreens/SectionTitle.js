/**
 * SectionTitle component.
 * Renders a title for a section on the Describe Service Page.
 *
 * @component
 * @param {string} title - The title text to be displayed for the section.
 * @param {object} sectionTitleContainer - Additional styles to be applied to the title container.
 * @returns {JSX.Element} SectionTitle component
 */

import React from 'react';
import { View} from 'react-native';
import {section as styles} from '../css'
import { Text } from 'react-native-paper';

const SectionTitle = ({title, sectionTitleContainer}) => (
   <View 
         style={[styles.titleSectionContainer, sectionTitleContainer]}>
         <Text style={styles.titleSection}>
                     {title}
         </Text>
   </View>
)
export default SectionTitle;