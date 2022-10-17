import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import TodoListScreen from './components/screens/TodoListScreen';
import EditScreen from './components/screens/EditScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='TodoList'>
        <Stack.Screen name="TodoList" component={TodoListScreen} />
        <Stack.Screen name="Edit" component={EditScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}


