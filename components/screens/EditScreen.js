import React from 'react';
import { View, StyleSheet, TextInput, Button } from "react-native"


const EditScreen = ({ navigation, route }) => {

    const { item } = route.params
    const [text, onChangeText] = React.useState(item.title);


    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text} />
            <View style={styles.button}>
                <Button 
                disabled={!text}
                title='Update'
                    onPress={() => {

                        item.title = text
                        navigation.navigate({
                            name: 'TodoList',
                            params: { updatedItem: item.title },
                            merge: true,
                        });
                    }} />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    button: {
        margin: 12
    }
})
export default EditScreen