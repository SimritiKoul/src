/**
 * SectionContainer component.
 * Renders a container for a single section on the Describe Service Page,
 * including the section title and content.
 *
 * @component
 * @param {object} children - JSX elements to be rendered within the section container.
 * @param {object} style - Additional styles to be applied to the section container.
 * @returns {JSX.Element} SectionContainer component
 */

import React from 'react';
import { View} from 'react-native';
import {section as styles} from '../css' 

const SectionContainer = ({children, style}) => {
  return (
    <View 
          style={[styles.sectionContainer, style]}>
                      {children}
    </View>
  );
}

export default SectionContainer;