import './styles.css'
import { useState, useEffect } from 'react'

function App() {
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState(()=>{
    const localValue = localStorage.getItem("todos")
    if (localValue === null) return []

    return JSON.parse(localValue)
  })

  useEffect(() =>{
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  function handleSubmit(e){
    e.preventDefault()
    setTodos((currentTodos) =>{
      return [...currentTodos , {id: crypto.randomUUID(), title: newItem, completed: false}]
    })
    setNewItem("")
  }


  function toggleCheck(id, completed){
    setTodos(currentTodos =>{
      return currentTodos.map(todo =>{
        if(todo.id === id){
        return {...todo, completed}
        }
        return todo
      })
    })
  }

  function deleteTodo(id){
    setTodos(currentTodos =>{
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
    <form onSubmit = {handleSubmit} className="new-item-form">
      <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input
      value = {newItem}
      onChange={e => setNewItem(e.target.value) }
      type="text" 
      id="item"
      />
      </div>
      <button className="btn">Add Item</button>
    </form>
    <h1 className="header">Do This Dude</h1>
    <ul className='list'>
      {todos.length === 0 && "No Todos"}
      {todos.map(todo =>{
        return(
        <li key={todo.id}>

          <input 
          checked = {todo.completed} 
          onChange={e => toggleCheck(todo.id, e.target.checked)} 
          type="checkbox" /> 
          {todo.title}
        <button
        onClick={() => deleteTodo(todo.id)} 
        className="btn btn-danger">
          Delete
          </button>
      </li>
      )
      })}      
    </ul>
   
    </>
  )
}

export default App
