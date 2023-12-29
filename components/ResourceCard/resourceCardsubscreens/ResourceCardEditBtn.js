//make a edit button component for resource card
import React from 'react';
import {Button} from 'react-native-paper';
import { resourceCard as styles } from '../../css';
const EditButton = ({text, onPress}) => (
  <Button mode='elevated' style={styles.editbtn} labelStyle={styles.edtbtntxt} onPress={onPress}>
      {text}
  </Button>
)
export default EditButton;