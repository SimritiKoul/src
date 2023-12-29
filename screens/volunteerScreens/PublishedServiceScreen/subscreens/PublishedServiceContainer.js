//this file will make a container which wraps around all the content of the PublishedService screen
import React from 'react';
import { SafeAreaView} from 'react-native';
import { publishedServiceContainer as styles } from '../css';
const PublishedServiceContainer = ({children}) => (
  <SafeAreaView style={styles.publishedServiceContainer}>
    {children}
  </SafeAreaView>
)
export default PublishedServiceContainer;