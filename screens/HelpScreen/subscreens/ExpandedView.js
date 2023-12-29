//this file will make a text component that will be appeared under the question view right afer the arrow down btn on the question view is clicked
import React from 'react';
import { Text } from 'react-native-paper';
import { helpOptDetail as styles } from '../css';
const ExpandedView = ({detail}) => (
    <Text style={styles.detailText}>{detail}</Text>
)
export default ExpandedView;