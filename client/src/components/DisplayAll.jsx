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
        <h1>To Do List:</h1>
        {
            allTodos.map((todo, i)=>{
                return(
                    <div key={i}>
                        <ul>
                            <li>
                                <input type='checkbox' onChange={() => toggleComplete(i)} checked ={todo.complete}/>
                                <label>Done</label>
                                <span className={todo.complete ? "text-decoration-line-through" : ""}>{todo.todo}</span>
                                <button onClick={() => deleteTodo(i)}>Delete</button>
                            </li>
                        </ul>
                    </div>
                )
            })
        }
    </div>
  )
}

export default DisplayAll