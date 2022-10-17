import { Text, Touchable, TouchableOpacity, View } from "react-native"


const AddTodo = ({ onAddTodoHandler }) => {
    return (
        <View>
            <TouchableOpacity  onPress={onAddTodoHandler}>
                <Text>
                    Add Todo
                </Text>
            </TouchableOpacity>

        </View>
    )
}




export default AddTodo