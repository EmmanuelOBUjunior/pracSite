import './App.css';

const App = () =>{
  const name = "Developer"
  const isShowing = true;
  return (
    <div className="App">
      <h1>Hello, {isShowing ? name : "Unknown"}</h1>
      {name ? 
      <>
      Hello, {name}
      </>:
      <>
      Hello, Unknown
      </>}
    </div>
  );
}

export default App;
