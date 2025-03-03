import React, { useState } from 'react';
import './App.css';
import NewTodoForm from './component/NewTodoForm';
import TodoTable from './component/TodoTable';

function App() {

  const [showAddTodoForm, setShowAddTodoForm] = useState(false);

  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: 'Feed puppy', rowAssigned: 'User One' },
    { rowNumber: 2, rowDescription: 'Water plants', rowAssigned: 'User two' },
    { rowNumber: 3, rowDescription: 'Make dinner', rowAssigned: 'User three' },
    { rowNumber: 4, rowDescription: 'Charge phone battery', rowAssigned: 'User four' }
  ])

  const addTodo = (description: string, assigned:string) => {
    let rowNumber = 0;
    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }

    if (todos.length > 0) {
      const newTodo = {
        rowNumber: rowNumber,
        rowDescription: description,
        rowAssigned: assigned
      };
      setTodos(todos => [...todos, newTodo]);

    }
  }

  const deleteTodos = (deleteTodoRowItem: number) => {
    let filtered = todos.filter(function (value) {
      return value.rowNumber !== deleteTodoRowItem;
    });

    setTodos(filtered);
  }

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">
          Your's to do
        </div>
        <div className="card-body">
          <TodoTable todos={todos} deleteTodos={deleteTodos} />
          <button className='btn btn-primary' onClick={() => setShowAddTodoForm(!showAddTodoForm)}>
            {showAddTodoForm ? 'Close new todo' :  'New todo'}
          </button>
          {showAddTodoForm &&
            <NewTodoForm addTodo={addTodo} />
          }
        </div>
      </div>
    </div>
  );
}

export default App;
