import TodoList from "./TodoList";
import {useState} from "react";

function App() {
    const [todos, setTodos] = useState([{id: 1, name: "Learn React", completed: false}, {
        id: 2,
        name: "Learn Redux",
        completed: true
    }]);
    return (
        <>
            <TodoList todos={todos}/>
            <input type="text"/>
            <button>Add new To Do Item</button>
            <button>Clear complete</button>
            <div>0 left to do</div>
        </>
    )
}

export default App;
