import React, {useState} from "react";
import uuid from 'react-uuid';
import TodoList from "./TodoList";
import TodoControls from "./TodoControls";
import TodoLeft from "./TodoLeft";
import "./css/App.css";

const LOCAL_STORAGE_KEY = 'todoApp.todos';

function App() {
    const [todos, setTodos] = useState([]);

    const todoNameRef = React.createRef();

    React.useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        console.log(storedTodos);
        if (storedTodos) setTodos(storedTodos);
    }, []);

    React.useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }, [todos]);

    function toggleTodo(id) {
        const newTodos = [...todos];
        const todo = newTodos.find((todo => todo.id === id))
        todo.complete = !todo.complete;
        setTodos(newTodos);
    }

    function handleAddTodo() {
        const name = todoNameRef.current.value;
        if (name === "") {
            return;
        }
        setTodos(prevTodos => {
            return [...prevTodos, {id: uuid(), name: name, complete: false}];
        })
        todoNameRef.current.value = null;
    }

    function handleClearTodo() {
        setTodos(prevTodos => {
            return prevTodos.filter(todo => !todo.complete);
        });
    }

    return (
        <div className={"container"}>
            <h1 className={"todoTitle"}>To Do List</h1>
            <TodoList todos={todos} toggleTodo={toggleTodo}/>
            <TodoControls todoNameRef={todoNameRef} addTodo={handleAddTodo} clearTodo={handleClearTodo}/>
            <TodoLeft todos={todos}/>
            <footer className={"todoFooter"}>A react App by Duberly Guarnizo</footer>
        </div>
    )
}

export default App;
