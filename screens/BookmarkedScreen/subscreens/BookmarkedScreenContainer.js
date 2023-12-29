//container for bookmarked service screen. Every content of the bookmarked service screen will be wrapped by this component. 
import React from 'react';
import { View, ScrollView } from 'react-native';
import { bookmarkedScreenContainer as styles } from '../css';
const BookmarkedScreenContainer = ({children}) => (
  <View style={styles.bookmarkedScreenContainer}>
    {children}
  </View>
)
export default BookmarkedScreenContainer;