import { TouchableOpacity, View } from "react-native"
import { StyleSheet, Text } from 'react-native';


const TodoListItem = ({ item, deleteHandler, editHandler }) => {
    return (
        <View style={styles.todoContainer}>
            <Text style={styles.title}>{item.title}</Text>

            <View style={styles.editDeleteContainer}>
                <TouchableOpacity
                onPress={() => editHandler(item)}>
                <Text style={styles.edit}>Edit</Text>

                </TouchableOpacity>
                <TouchableOpacity onPress={() => deleteHandler(item.key)}>
                    <Text>Delete</Text>
                </TouchableOpacity>

            </View>




        </View>
    )
}

const styles = StyleSheet.create({
    todoContainer: {
        flexDirection: "row",
        paddingTop: 8,
        paddingBottom: 8,
        justifyContent: 'space-between'
    },

    editDeleteContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    title: {
        width:250,
        marginEnd: 20
    },

    edit: {
        marginEnd: 20
    }

})

export default TodoListItem