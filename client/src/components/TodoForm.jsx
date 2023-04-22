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
    <div className='container form-group'>
        <form action="" onSubmit={handleNewTodoSubmit}>
            <label htmlFor="todo">Create To Do:</label>
            <div className="input-group mb-3">
                <input 
                className='form-control' 
                type="text" 
                name='todo'  
                value={todo.todo}
                onChange={handleChange}/>
                <button className='btn btn-outline-secondary' type="submit" id="button-addon2">Add</button>
            </div>
        </form>
    </div>
  )
}

export default TodoForm