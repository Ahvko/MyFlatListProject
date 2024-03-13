
import React, { useState, useEffect } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import DATA from './data';
import Row from './components/Row';
import Search from './components/Search';

const App = () => {
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    setSearchData(DATA);
  }, []);

  const executeSearch = (searchText) => {
    const filteredData = DATA.filter(item =>
      item.lastname.toLowerCase().startsWith(searchText.toLowerCase())
    );
    setSearchData(filteredData);
  };

  return (
    <SafeAreaView>
      <Search executeSearch={executeSearch} />
      <FlatList
        data={searchData}
        renderItem={({ item }) => <Row person={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
};

export default App;