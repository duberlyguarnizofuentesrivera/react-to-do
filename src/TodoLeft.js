import React from "react";
import "./css/TodoLeft.css";
export default function TodoLeft({todos}) {
    return (
        <div className={"todoLeft"}>
            <span className={"todoLeftNumber"}>{todos.filter(todo => !todo.complete).length}</span>
            <span className={"todoLeftText"}> left to do</span>
        </div>
    );
}