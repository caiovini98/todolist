import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

export default function addTodo({submitHandler}) {

    const [text, setText] = useState('');
    const changeHandler = (valor) => {
        setText(valor)
    }
    return(
        <View>
            <TextInput 
                style = {styles.input}
                placeholder="Digite uma nova tarefa"
                onChangeText={changeHandler}
            />
            <Button 
                onPress={() => submitHandler(text)}
                title="Adicionar tarefa"
                color='#4df281'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#DDD'
    }
})