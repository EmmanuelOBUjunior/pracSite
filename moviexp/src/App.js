import './App.css';

const App = () =>{
  const name = "Developer"
  const isShowing = true;
  return (
    <div className="App">
      <h1>Hello, {isShowing ? name : "Unknown"}</h1>
    </div>
  );
}

export default App;
