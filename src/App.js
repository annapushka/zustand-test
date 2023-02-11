import './App.css';
import { Divider, VStack } from '@chakra-ui/react';
import { Filter } from './components/Filter';
import { ToDoList } from './components/ToDoList';
import { TotalTodos } from './components/TotalTodos';
import { NewToDo } from './components/NewToDo';

function App() {
  return (
    <VStack spacing={4}>
        <Filter/>
        <ToDoList/>
        <Divider/>
        <TotalTodos/>
        <NewToDo/>
    </VStack>
  );
}

export default App;
