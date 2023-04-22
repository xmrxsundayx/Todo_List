import './App.css';
import React, { useState } from 'react'
import TodoForm from './components/TodoForm'
import DisplayAll from './components/DisplayAll';

function App() {

  const [allTodos, setAllTodos] = useState([]);

  return (
    <div className="App container">
      <h1 className="text-center my-4">To-Do List</h1>
      <TodoForm allTodos={allTodos} setAllTodos={setAllTodos} />
      <DisplayAll allTodos={allTodos} setAllTodos={setAllTodos} />
    </div>
  );
}

export default App;