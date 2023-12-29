import React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import { colors } from '../base';
function Header({navigation, title, hasSearchBar}) {
  return (
    <Appbar.Header style={styles.headerContainer}>
      <Appbar.BackAction onPress={() => navigation.goBack()} />
     <Appbar.Content title={title} titleStyle={styles.headerTitle}/>
      {hasSearchBar &&
                    <Appbar.Action icon="magnify" onPress={() => {console.log('pressed search')}} />}
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    alignSelf:'flex-start',
    fontSize:25,
  },
  headerContainer: {
    backgroundColor: colors.white,
  }
});

export default Header;