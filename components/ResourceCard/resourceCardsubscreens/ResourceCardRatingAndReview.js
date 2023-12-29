//make a rating and review poriton in resource card
import React from 'react';
import { View} from 'react-native';
import { reviewStar, dotIcon } from '../../icons';
import { Text } from 'react-native-paper';
import { resourceCard as styles } from '../../css';
import { TouchableOpacity } from 'react-native';
const ResourceCardRatingAndReview = ({rating, review, onPress}) => {
  return (
    <View style={styles.resourceCardRatingContainer}>
        {reviewStar}
        <Text style={styles.resourceCardRatingAndReview}> {rating} </Text>
        {dotIcon}
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.resourceCardRatingAndReview}>
          {" "}
          {review} Reviews
        </Text>
      </TouchableOpacity>
    </View>
  );
}
export default ResourceCardRatingAndReview;