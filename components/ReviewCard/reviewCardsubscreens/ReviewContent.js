//make a portion to display the text on the review card that reviewer typed for the resource
import React from 'react';
import { Card, Text } from 'react-native-paper';
const ReviewContent = ({content}) => (
  <Card.Content>
    <Text variant='bodyMedium'>{content}</Text>
  </Card.Content>
)
export default ReviewContent;