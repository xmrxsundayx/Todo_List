import React from 'react'

const DisplayAll = ({allTodos, setAllTodos}) => {

    const deleteTodo = (index) =>{
        const updateList = allTodos.filter((e,i) => i !== index);
        setAllTodos(updateList)
    }

    const toggleComplete = (index) => {
        const newTodo = [...allTodos]; 
        newTodo[index].complete = !newTodo[index].complete;
        setAllTodos(newTodo)
    }


  return (
    <div>
        <ul className="list-group">
            {allTodos.map((todo, i)=>{
                return(
                    <li className="list-group-item d-flex justify-content-between align-items-center" key={i}>
                        <div className="form-check">
                            <input type='checkbox' className="form-check-input" onChange={() => toggleComplete(i)} checked ={todo.complete}/>
                            <label className="form-check-label"><span className={todo.complete ? "text-decoration-line-through" : ""}>{todo.todo}</span></label>
                        </div>
                        <button className="btn btn-outline-danger" onClick={() => deleteTodo(i)}>Delete</button>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default DisplayAll