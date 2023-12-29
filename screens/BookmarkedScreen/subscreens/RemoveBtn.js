//the file will make a remove button component which will be used to remove the resource card on the bookmarked service screen
import React from 'react';
import { Text, Button } from 'react-native-paper';
import { removeBtn as styles } from '../css';
import {Pressable} from "react-native";
const RemoveBtn = ({onPress}) => (
  <Pressable style={styles.removeButton} mode='elevated' onPress={onPress}>
    <Text style={styles.removeButtonText}>Remove</Text>
  </Pressable>
)
export default RemoveBtn;