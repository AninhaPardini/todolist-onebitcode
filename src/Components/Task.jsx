import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, requireNativeComponent } from 'react-native'

export default function Task({ item, deleteItem }) {
    const [check, setCheck] = useState(false)
    
    const handleCheck = () => {
        setCheck(!check);
    };

    return (
        /* modularização de cores do botão, é colocar o elemento base em []*/
        <View style={[styles.taskContainer, 
            {backgroundColor: check === false ? '#29307C' : '#3CAB47'},
            ]}
        >
            { 
                check === false ? (
                    <TouchableOpacity style={styles.checkCircle} onPress={handleCheck}/>
                ) : (
                    <TouchableOpacity onPress={handleCheck}>
                        <Image 
                            style={styles.iconImage}
                            source={require('../assets/concluido.png')}/>
                    </TouchableOpacity>
                )
            }
            <View>
                <Text style={styles.taskTitle}>{item.value}</Text>
            </View>
            <TouchableOpacity onPress={() => deleteItem(item.key)}>
                <Image 
                    style={styles.iconImage} 
                    source={require('../assets/lixo.png')
                }
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    taskContainer: {
        marginTop: 20,
        backgroundColor: '#4DD75B',
    /* Flexdirection para alinhar os itens */
        flexDirection: 'row',
        paddingVertical: 20,
        paddingHorizontal: 10,
        justifyContent: 'center',
        borderRadius: 10,
    },
    checkCircle: {
        borderWidth: 1,
        width: 25,
        height: 25,
        borderRadius: 12,
        borderColor: '#3CAB47',
    },
    taskTitle: {
        color: '#30923A',
        fontSize: 16,
        minWidth: 180,
        maxWidth: 180,
        paddingHorizontal: 15,
    },
    iconImage: {
        width: 25,
        height: 25,
    },
});