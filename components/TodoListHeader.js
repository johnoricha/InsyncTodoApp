
import { View, Text, StyleSheet } from 'react-native'

export default function TodoListHeader() {

    return (
        <View>
            <Text style={styles.text}>Todo List</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        textAlign: 'left',
        paddingStart: 8,
        color: 'grey'
    }
})