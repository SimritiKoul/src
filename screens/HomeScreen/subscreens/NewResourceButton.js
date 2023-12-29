/**
 * This file make a 'Add Resource' button
 */

import * as React from 'react';
import { newresourcebutton as styles } from '../css';
import { Text, Pressable } from 'react-native';


const NewResourceButton = ({navigation}) => {

  return (
    <Pressable style={styles.newResourceDefaultStyle} onPress={() => navigation.navigate('View Published Service')}>
      <Text style={styles.textStyle}> Add Resource        +</Text>
    </Pressable>
  );
};
export default NewResourceButton;