import { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import AddTodo from './AddTodo';


const TodoInput = ({ onAddTodoHandler }) => {

    const [text, setText] = useState('')

    const onInputChangeHandler = (val) => {
        setText(val)
    }


    return (
        <View style={styles.addTodoContainer}>
            <TextInput style={styles.input}
                placeholder='What do you have planned?'
                onChangeText={(val) => { onInputChangeHandler(val) }} />
            <AddTodo onAddTodoHandler={() => onAddTodoHandler(text)} />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginStart: 8,
        marginEnd: 16
    },
    addTodoContainer: {
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    }
})

export default TodoInput