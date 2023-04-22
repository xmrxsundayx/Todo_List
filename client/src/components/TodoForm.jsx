import React, {useState} from 'react'

const TodoForm = ({allTodos, setAllTodos}) => {
    const [todo, setTodo] = useState({
        todo: '',
        complete: false
    })

    const handleNewTodoSubmit = (e) => {
        e.preventDefault();
        setAllTodos([...allTodos, todo]);
        setTodo({todo: '', complete: false});
    }

    const handleChange = (e) => {
        setTodo({
            ...todo,
            [e.target.name]: e.target.value
        })
    }

  return (
    <div className='container form-control'>
        <form action="" onSubmit={handleNewTodoSubmit}>
            <label>Create To Do:</label>
            <input 
            className='form-control' 
            type="text" 
            name='todo'  
            value={todo.todo}
            onChange={handleChange}/>
            <button className='form-control' >Add</button>
        </form>
    </div>
  )
}

export default TodoForm