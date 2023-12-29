//make a description portion for resource card
import React from 'react';
import { View} from 'react-native';
import { Text } from 'react-native-paper';
import { resourceCard as styles } from '../../css';
const ResourceCardDescription = ({description}) => (
  <View style={styles.resourceCardDescriptionContainer}>
        <Text style={styles.resourceCardDescription}>{description}</Text>
  </View>
)
export default ResourceCardDescription;