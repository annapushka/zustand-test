import './App.css';
import { Divider, VStack } from '@chakra-ui/react';
import { Filter } from './components/Filter';
import { TodoList } from './components/TodoList';
import { TotalTodos } from './components/TotalTodos';
import { NewToDo } from './components/NewToDo';

function App() {
  return (
    <VStack spacing={4}>
        <Filter/>
        <TodoList/>
        <Divider/>
        <TotalTodos/>
        <NewToDo/>
    </VStack>
  );
}

export default App;
