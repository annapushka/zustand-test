import {
    nanoid
} from 'nanoid';
import create from 'zustand';

export const useTodos = create((set, get) => ({
    todos: [{
            id: 1,
            title: 'Learn JS',
            completed: true
        },
        {
            id: 2,
            title: 'Learn React',
            completed: false
        },
    ],
    loading: false,
    error: null,
    // addTodo: (title) => set(state => ({
    //     todos: [
    //         ...state.todos,
    //         {
    //             id: nanoid(),
    //             title,
    //             completed: false
    //         }
    //     ]
    // }))
    addTodo: (title) => {
        set({
            todos: [...get().todos, {
                id: nanoid(),
                title,
                completed: false
            }]
        })
    },
    toggleTodo: (todoId) => set({
        todos: get().todos.map(
            todo => todoId === todo.id ?
            { ...todo, completed: !todo.completed } 
            : todo
        )
    })

}))

export const useFilter = create(set => ({
    filter: 'all',
    setFilter: (value) => set({ filter: value })
  }))