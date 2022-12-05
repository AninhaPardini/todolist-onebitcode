import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Empty() {
    return (
        <View>
            <Text style={styles.title}>Sua Lista de tarefas está vazia!</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        textAlign: 'center',
        color: '#E3E7FF',
        marginTop: 15,
        fontStyle: 'italic',
    },
})