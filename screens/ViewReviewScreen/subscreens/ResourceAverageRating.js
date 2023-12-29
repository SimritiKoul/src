//this file will make a view component which displays the resource's rating, rating star and the text 'based on reviews' on the Review screen 
import React from 'react';
import { View} from 'react-native';
import { Text } from 'react-native-paper';
import renderStarRating from '../../../utils/renderStarRating';
import { resourceAverageRating as styles } from '../css';
const ResourceAverageRating = ({rating}) => {
  return (
    //container
    <View style={styles.container}>
        {/* resource's rating */}
        <Text variant='displayLarge'>3.0</Text>
        {/* resource's rating star */}
        {renderStarRating(rating, styles.starRating)}
        {/* text */}
        <Text variant='labelSmall' style={styles.text}>based on 6 reviews</Text>
    </View>
  )
}
export default ResourceAverageRating;