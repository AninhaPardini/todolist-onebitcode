import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard } from 'react-native';

export default function Input( { submitHandler }) {
    const [value, setValue] = useState("");

    const onChangeText = (text) => {
        setValue(text);
    };

    const handleAddHabit = () => {
        /* atualizado */
        setValue(submitHandler(value));
        /* limpo */
        setValue("");
        /* teclado ira ser minizado */
        Keyboard.dismiss();
    };

    return (
        <View>
            <View>
                <TextInput 
                    placeholder="Adicione seu jogo!"
                    placeholderTextColor='#DAC71F'
                    value={value}
                    onChangeText={onChangeText}
                    style={styles.input}
                />
                <TouchableOpacity onPress={handleAddHabit} style={styles.buttom}>
                    <Text style={styles.buttomText}>Adicionar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        width: 200,
        color: 'white',
        borderWidth:  0.3,
        borderColor: '#DAC71F',
        paddingVertical: 10,
        paddingHorizontal: 15,
        textAlign: 'center',
    },
    buttom: {
        borderWidth: 1,
        borderColor: '#DAC71F',
        borderRadius: 15,
        paddingVertical: 15,
        marginTop: 25,
        backgroundColor: '#DAC71F',
        justifyContent: 'center',
    },
    buttomText: {
        color: '#D99B1E',
        textAlign: 'center',
        fontStyle: 'bold',
        fontSize: 19,
        fontWeight: 'bold',
    }
});