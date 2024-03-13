import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Row = ({ person }) => (
    <View style={styles.row}>
        <Text style={styles.text}>{person.firstname} {person.lastname}</Text>
    </View>
);

const styles = StyleSheet.create({
    row: {
        padding: 20,
    },
    text: {
        fontSize: 18,
    },
});

export default Row;