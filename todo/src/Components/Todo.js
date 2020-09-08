import React, { useReducer, useState } from 'react';
import {toDoReducer, initialState} from '../reducers/index'

const Todo = () => {
    const [newTaskText, setNewTaskText] = useState('')
    const [state, dispatch] = useReducer(toDoReducer, initialState);

    const handleChanges = (event) => {
        setNewTaskText(event.target.value);
    }    

    const submitHandler = () => {

    }

    return (
        <div>
            <ul>To do list</ul>
                {state.map((item) => (
                    <ol onClick={() => dispatch({type: "TOGGLE_TASK"})}>{item.task}</ol>
                ))}
            <div>
                <form>
                    <input
                    type='text'
                    name='newTask'
                    value={newTaskText}
                    onChange={handleChanges}
                    />
                    <button onClick={() => {
                        dispatch({type: "ADD_TASK", payload: newTaskText})
                    }}>Add Task</button>
                </form>
            </div>
        </div>
    );
}

export default Todo;