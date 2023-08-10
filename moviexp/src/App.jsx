import './App.css';


const Person = ({firstName, lastName, Age}) =>{
  return(
    <>
    <h1>First Name: {firstName}</h1>
    <h2>Last Name: {lastName}</h2>
    <h2>Age: {Age}</h2>
    </>
  )
}



const App = () =>{
  return (
    <div className="App">
      <Person
      firstName= "Emmanuel Junior"
      lastName= "Obu"
      Age={25}
      />
    </div>
  );
}

export default App;
