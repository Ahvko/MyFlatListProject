
import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Search = ({ executeSearch }) => {
    const [searchText, setSearchText] = useState('');

    return (
        <TextInput
            style={styles.input}
            value={searchText}
            onChangeText={setSearchText}
            onSubmitEditing={() => executeSearch(searchText)}
            placeholder="Search..."
            returnKeyType="search"
        />
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
    },
});

export default Search;