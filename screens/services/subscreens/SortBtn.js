//sort btn
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { arrowDownIcon } from '../icons';
import { service as styles } from '../css';
const SortBtn = () => (
  <TouchableOpacity style = {styles.sortbutton}>
      <Text>Sort by</Text>
      {arrowDownIcon}
  </TouchableOpacity>
)
export default SortBtn;