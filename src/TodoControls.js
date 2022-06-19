import React from "react";
import "./css/TodoControls.css";

export default function TodoControls({todoNameRef, addTodo, clearTodo}) {

    return (
        <>
            <div className={"inputContainer"}>
                <input ref={todoNameRef} type="text"/>
            </div>

            <div className={"buttonContainer"}>
                <button onClick={addTodo}>Add new To Do Item</button>
                <button onClick={clearTodo}>Clear complete</button>
            </div>
        </>
    )
        ;
}