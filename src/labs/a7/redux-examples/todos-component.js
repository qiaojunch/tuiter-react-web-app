import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, todoDoneToggle } from "./reducers/todos-reducer";

const Todos = () => {
    // retieve todos from reducer state
    const todos = useSelector(state => state.todos)

    // use state to update input
    const [todo, setTodo] = useState({do: ""});
    const todoChangeHandler = (event) => {
        const doValue = event.target.value; // retrieve input value
        const newTodo = {                   // create new todo
            do: doValue
        };
        setTodo(newTodo);                   // update todo
    }


    // use dispatch to add new todo to todos
    const dispatch = useDispatch();
    const createTodoClickHandler = () => {
        dispatch(addTodo(todo));
    }

    // delete todo from todos
    const deleteTodoClickHandler = () => {
        dispatch(deleteTodo(todo));
    }

    // handle checkbox change
    const toggleTodoDone = (todo) => {
        dispatch(todoDoneToggle(todo));
    }

    return (
        <>
            <h3>Todos</h3>
            <ul className="list-group">
                <li className="list-group-item">
                    <button 
                        onClick={createTodoClickHandler}
                        className="btn btn-primary w-25 float-end">
                        Create</button>
                    <input 
                        onChange={todoChangeHandler}
                        value={todos.do}
                        className="form-control w-75" />
                </li>
                {
                    todos.map(todo => 
                        <li className="list-group-item">
                            <button 
                                onClick={deleteTodoClickHandler}
                                className="btn btn-danger w-25 float-end">
                                Delete</button>
                            <input type="checkbox"
                                checked={todo.done}
                                onChange={() =>
                                    toggleTodoDone(todo)}
                                className="me-2" />
                            {todo.do}
                        </li>
                    )
                }
            </ul>
        </>
    )
}
export default Todos;