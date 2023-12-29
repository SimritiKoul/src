//this file will make the instruction card component which instructs the volunteer how to publish their resource
import React from 'react';
import {Card} from 'react-native-paper';
import {Image} from 'react-native';
import {instructionCard as styles} from '../css';

const InstructionCard = ({title, instruction, source}) => (
  <Card.Title
    title={title}
    subtitle={instruction}
    right={() => <Image source={{uri: source}} style={styles.image}/>}
    subtitleNumberOfLines={15}
    titleStyle={styles.title}
    style={styles.container}
    subtitleStyle={styles.subTitle}
  />
)
export default InstructionCard;