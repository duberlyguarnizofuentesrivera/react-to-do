import TodoList from "./TodoList";
import {useState, useRef} from "react";
import uuid from 'react-uuid';
import {useEffect} from "react";
import TodoControls from "./TodoControls";

const LOCAL_STORAGE_KEY = 'todoApp.todos';

function App() {
    const [todos, setTodos] = useState([]);

    const todoNameRef = useRef();

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (storedTodos) setTodos(storedTodos);
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }, [todos]);

    function toggleTodo(id) {
        const newTodos = [...todos];
        const todo = newTodos.find((todo => todo.id === id))
        todo.complete = !todo.complete;
        setTodos(newTodos);
    }

    function handleAddTodo(e) {
        const name = todoNameRef.current.value;
        if (name === "") {
            return;
        }
        setTodos(prevTodos => {
            return [...prevTodos, {id: uuid(), name: name, complete: false}];
        })
        todoNameRef.current.value = null;
    }

    function handleClearTodo(e) {
        setTodos(prevTodos => {
            return prevTodos.filter(todo => !todo.complete);
        });
    }

    return (
        <>
            <TodoList todos={todos} toggleTodo={toggleTodo}/>
            <TodoControls todoNameRef={todoNameRef} addTodo={handleAddTodo} clearTodo={handleClearTodo}/>
            <div>{todos.filter(todo => !todo.complete).length} left to do</div>
        </>
    )
}

export default App;
