import { Text } from '@chakra-ui/react';
import * as React from 'react';

export const TotalTodos = (props) => {
    const count = 2;
    return (
        <Text fontWeight='bold'>Total: {count}</Text>
    );
};