import './styles.css'
import { useState } from 'react'

function App() {
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])

  function handleSubmit(e){
    e.preventDefault()

    setTodos((currentTodos) =>{
      return [...currentTodos , {id: crypto.randomUUID(), title: newItem, completed: false}]
    })
    setNewItem("")
  }

  console.log(todos)

  function toggleCheck(id, completed){
    setTodos(currentTodos =>{
      return currentTodos.map(todo =>{
        if(todo.id === id){
        return {...todo, completed}
        }
        console.log(todo.title, todo.completed)
        return todo
      })
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
      {todos.map(todo =>{
        return(
        <li key={todo.id}>
        <label>
          <input 
          checked = {todo.completed} 
          onChange={e => toggleCheck(todo.id, e.target.checked)} 
          type="checkbox" /> 
          {todo.title}
        </label>
        <button className="btn btn-danger">Delete</button>
      </li>)
      })}      
    </ul>
   
    </>
  )
}

export default App
