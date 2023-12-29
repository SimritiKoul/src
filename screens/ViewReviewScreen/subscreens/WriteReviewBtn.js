//this file will make a write review btn for the review screen 
import React from 'react';
import { View} from 'react-native';
import { Button, Text} from 'react-native-paper';
import { btnSettings } from '../../volunteerScreens/ThirdStepScreen/submitBtnProp';
import { writeReviewBtn as styles } from '../css';
const WriteReviewBtn = ({onPress}) => (
  <View style={styles.container}>
    <Button  {...btnSettings} style={styles.btnView} onPress={onPress}>
        <Text style={styles.btnText}>Write a Review</Text>
    </Button>
  </View>
)
export default WriteReviewBtn;