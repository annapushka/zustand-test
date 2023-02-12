import { Button, Stack } from '@chakra-ui/react';
import * as React from 'react';

export const Filter = (props) => {
    const filter = 'all';

    return (
        <Stack spacing={2} direction='row' mt='8'>
            <Button disabled={filter === 'all'}>All</Button>
            <Button disabled={filter === 'uncomleted'}>Not completed</Button>
            <Button disabled={filter === 'comleted'}>Completed</Button>
        </Stack>
    );
};