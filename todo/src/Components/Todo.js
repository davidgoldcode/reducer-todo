import React, { useReducer, useState, useEffect } from 'react';
import {toDoReducer, initialState} from '../reducers/index'

const Todo = () => {
    const [state, dispatch] = useReducer(toDoReducer, initialState);
    const [newTaskText, setNewTaskText] = useState('');

    useEffect(() => {
        console.log(state);
    }, []);

    const handleChanges = (event) => {
        event.preventDefault();
        setNewTaskText(event.target.value);
    }    

    const submitHandler = () => {

    }

    return (
        <div>
            <ul>To do list</ul>
                {state.map((item) => (
                    <ol onClick={() => dispatch({type: "TOGGLE_TASK", payload: item.id})}>{item.task}</ol>
                ))}
            <div>
                <form>
                    <input
                    type='text'
                    name='newTaskText'
                    value={newTaskText}
                    onChange={handleChanges}
                    />
                    <div>
                        <button onClick={() => {
                    dispatch({type: "ADD_TASK", payload: newTaskText})
                    }}>Add Task</button>
                    </div>
                    <div>
                        <button onClick={() => {
                            dispatch({type: "CLEAR_COMPLETED"})
                        }}>Clear Completed</button>
                    </div>
                    
                </form>
            </div>
        </div>
    );
}

export default Todo;