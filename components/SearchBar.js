//this file will create a search bar
import * as React from 'react';
import { searchBar as styles } from './css';
import { Searchbar } from 'react-native-paper';
const SearchBar = ({style}) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={[styles.searhBarDefaultStyle, style]}
    />
  );
};
export default SearchBar;