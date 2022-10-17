import * as React from 'react';

import { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View, StatusBar } from 'react-native';
import TodoListHeader from 'C:/Users/Home/ReactNativeProjects/InsynTodoApp/InsyncTodoApp/components/TodoListHeader';
import TodoListItem from 'C:/Users/Home/ReactNativeProjects/InsynTodoApp/InsyncTodoApp/components/TodoListItem';
import TodoInput from 'C:/Users/Home/ReactNativeProjects/InsynTodoApp/InsyncTodoApp/components/TodoInput.js'

const TodoListScreen = ({navigation, route}) => {

  const [todos, setTodos] = useState([
    { title: "pray in the mroning", key: 1 },
    { title: "eat breakfast", key: 2 },
    { title: "start coding", key: 3 },
  ])

  useEffect(() => {}, [route.params?.updatedItem]);

    
    
      const deleteHandler = (id) => {
        setTodos((todos) => {
          return todos.filter((item) => item.key != id)
        })
      }
    
      const onAddTodoHandler = (val) => {
        setTodos((todos) => { return [...todos, { title: val, key: Math.random() }] })
      }
    
      const editHandler = (item) => {
        navigation.navigate('Edit', {item: item})
      }

    return (
        <View style = { styles.container }>

        <TodoListHeader />

        <View style={styles.addTodoContainer}>

          <TodoInput onAddTodoHandler={onAddTodoHandler} />

        </View>

        <Text style={styles.subHeading}>Todos</Text>

        <View style={styles.listStyle}>
          <FlatList
            data={todos}
            renderItem={({ item }) => {
              return <TodoListItem item={item}
                deleteHandler={deleteHandler}
                editHandler={editHandler} />
            }}
          />
        </View>
      </View >

    )
}



const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: '#fff',
    },
    listStyle: {
        backgroundColor: '#fff',
        marginTop: 2,
        margin: 8,
        justifyContent: 'center',
    },
    addTodoContainer: {
        padding: 4,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    subHeading: {
        paddingStart: 8,
        color: 'grey',
    }
});

export default TodoListScreen