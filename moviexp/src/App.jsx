import './App.css';


const Person = ({firstName, LastName, Age}) =>{
  return(
    <>
    <h1>Name: Name</h1>
    <h2>Last Name: LastName</h2>
    <h2>Age: Age</h2>
    </>
  )
}



const App = () =>{
  return (
    <div className="App">
      <Person/>
    </div>
  );
}

export default App;
