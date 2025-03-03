import React from "react"
import TodoRowItem from "./TodoRowItem"
import { TodoModel } from "../models/TodoModel"

function TodoTable(props: {todos: TodoModel[], deleteTodos: Function}) {
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Description</th>
                    <th scope='col'>Assigned</th>
                </tr>
            </thead>
            <tbody>
                {props.todos.map(todo => (
                    <TodoRowItem
                        key={todo.rowNumber}
                        rowNumber={todo.rowNumber}
                        rowDescription={todo.rowDescription}
                        rowAssigned={todo.rowAssigned}
                        deleteTodo={props.deleteTodos}
                    />
                ))}
            </tbody>
        </table>
    )
}

export default TodoTable