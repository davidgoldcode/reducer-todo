import React from 'react';
import Todo from '../Components/Todo';

export const initialState = [{
    task: 'meal prep',
    completed: false,
    id: 23498234089, 
},
{
    task: 'clean room',
    completed: false,
    id: 33245244, 
}, 
{
    task: 'do lambda hw',
    completed: false,
    id: 23525424, 
}
]

export function toDoReducer(state, action) {
    console.log(state, action);
    switch (action.type) {
        case "ADD_TASK":
            const newTodo = {
                id: new Date(),
                task: action.payload,
                completed: false,
            }
            return [...state, newTodo]
        case "TOGGLE_TASK":
            console.log(action.payload);
            return state.map((item) => (item.id === action.payload ? {...item, completed: !item.completed } : item ))
        case "CLEAR_COMPLETED":
            console.log(action.payload);
            return state.filter((item) => item.completed === false);
        default:
            return state;
    }
}
