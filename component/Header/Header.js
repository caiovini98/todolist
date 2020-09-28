import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Header() {
    return(
        <View style={styles.header}>
            <Text style={styles.title}>Minha Lista ToDo</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: '#4df281'
    },
    title: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }
})