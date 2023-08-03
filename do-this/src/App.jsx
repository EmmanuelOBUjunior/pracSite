import './styles.css'

function App() {

  return (
    <form className="new-item-form">
      <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input type="text" id="item" />
      </div>
      <button className="btn">Add Item</button>
    </form>
  )
}

export default App
