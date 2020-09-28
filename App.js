import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import Header from './component/Header/Header';
import TodoItem from './component/TodoItem/TodoItem';
import AddTodo from './component/AddToDo/AddToDo';

export default function App() {
  const [todos, setTodos] = useState([])

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  const submitHandler = (text) => {
    if(text === '') {
      alert("Adicione algo");
    } else {
      setTodos((prevTodos) => {
        return [
          {text: text, key: Math.random().toString()},
          ...prevTodos
        ]
      })
    }
  }

  return(
    <View style={styles.container}>
      <Header></Header>
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler}></AddTodo>
        <View style={styles.list}>
          <FlatList 
            keyExtractor={(item)=>item.key}
            data={todos}
            renderItem={({item}) => (
              <TodoItem item={item} pressHandler={pressHandler}/>
            )}
          />
        </View>
      </View>

      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#FFF'
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20
  }
  
})

