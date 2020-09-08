import React from 'react';

export const initialState = [{
    task: 'meal prep',
    completed: false,
    id: 23498234089, 
},
{
    task: 'clean room',
    completed: false,
    id: 23498234089, 
}, 
{
    task: 'do lambda hw',
    completed: false,
    id: 29385982345, 
}
]

export function toDoReducer(state, action) {
    console.log(state, action);
    switch (action.type) {
        case "ADD_TASK":
            return [...state, {
                id: new Date(),
                task: action.payload,
                completed: false,
            }]
        case "TOGGLE_TASK":
            return [...state, {
                id: new Date(),
                task: action.payload,
                completed: false,
            }]        
        default:
            return state;
    }
}
