//this file will make a submit review btn for the Write Review screen
import React from 'react';
import { Button} from 'react-native-paper';
import { submitBtn as styles } from '../css';
const SubmitBtn = ({onPress}) => {
  return (
    <Button mode='elevated' style={styles.submitButton} labelStyle={styles.submitText} contentStyle={styles.contentBtn} onPress={onPress}>
      Submit Review
    </Button>
  );
}
export default SubmitBtn;