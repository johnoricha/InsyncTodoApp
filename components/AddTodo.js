import { Text, TouchableOpacity, View } from "react-native"


const AddTodo = ({ disabled, onAddTodoHandler }) => {
    return (
        <View>
            <TouchableOpacity 
            disabled={disabled}
            onPress={onAddTodoHandler}>
                <Text>
                    Add Todo
                </Text>
            </TouchableOpacity>

        </View>
    )
}




export default AddTodo