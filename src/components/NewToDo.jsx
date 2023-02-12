import * as React from 'react';
import {
    Button,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Input,
} from '@chakra-ui/react';
import { useRef } from 'react';

export const NewToDo = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const ref = useRef();

    const handleAddTodo = () => {
        onClose();
    };

    return (
        <>
            <Button colorScheme="teal" onClick={onOpen}>
                Add new todo
            </Button>

            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Create new todo</DrawerHeader>

                    <DrawerBody>
                        <Input
                            placeholder="Type here..."
                            ref={ref}
                            onKeyDown={(e) => e.key === 'Enter' && handleAddTodo()}
                            autoFocus
                        />
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant="outline" mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme="blue" onClick={handleAddTodo}>
                            Save
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
};