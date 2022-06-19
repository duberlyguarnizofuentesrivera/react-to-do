import React from "react";
import "./css/Todo.css"

export default function Todo({todo, toggleTodo}) {

    const todoText = todo.name.charAt(0).toUpperCase() + todo.name.slice(1).toLowerCase();

    function handleTodoClick() {
        return toggleTodo(todo.id);
    }

    return (
        <>
            <div>
                <label className="item">
                    <input type={"checkbox"} checked={todo.complete} onChange={handleTodoClick}/>
                    <span className="item-text"> {todoText}</span>
                </label>

            </div>
        </>
    )
}