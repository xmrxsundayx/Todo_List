import './App.css';
import React, { useState } from 'react'
import TodoForm from './components/TodoForm'
import DisplayAll from './components/DisplayAll';

function App() {

  const [allTodos, setAllTodos] = useState([]);

  return (
    <div className="App">
      <TodoForm allTodos={allTodos} setAllTodos={setAllTodos} />
      <DisplayAll allTodos={allTodos} setAllTodos={setAllTodos} />
    </div>
  );
}

export default App;
