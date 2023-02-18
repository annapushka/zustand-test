import { Text } from '@chakra-ui/react';
import * as React from 'react';
import { useTodos } from '../store';

export const TotalTodos = (props) => {
    const count = useTodos((state) => state.todos.length);
    return (
        <Text fontWeight='bold'>Total: {count}</Text>
    );
};