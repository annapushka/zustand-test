import { Checkbox, HStack, Stack, Text } from '@chakra-ui/react';

const Todo = ({ id, title, completed }) => {
    const toggleTodo = useTodos((state) => state.toggleTodo);

    return (
        <HStack spacing={4}>
            <Checkbox isChecked={completed} onChange={() => toggleTodo(id)} />
            <Text>{title}</Text>
        </HStack>
    );
};

export const ToDoList = (props) => {
    const todos = [

    ]

    return (
        <Stack minH="300px">
            {todos.map((todo) => (
                <Todo key={todo.id} {...todo} />
            ))}
        </Stack>
    );
};