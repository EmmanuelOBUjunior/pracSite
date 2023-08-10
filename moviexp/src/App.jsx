import './App.css';
import {useState, useEffect} from 'react'


const App = () =>{
  const [counter, setCounter] = useState(0)

  const changeCount=()=>{
    setCounter((prevCount) => prevCount -1)
  } 
  return (
    <div className="App">
     <button onClick={changeCount}>-</button>
     <h1>{counter}</h1>
     <button onClick={() => setCounter((prevCount)=> prevCount + 1)}>+</button>
    </div>
  );
}

export default App;
