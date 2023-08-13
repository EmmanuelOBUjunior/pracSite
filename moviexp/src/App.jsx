//29220acb
import {useEffect} from 'react'
import './App.css'
import SearchIcon from './search.svg'


const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=29220acb'
const App = () =>{
   
    const searchMovies = async(title)=>{
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = response.json()


        data.then(function(result){
            console.log(result)
        })
    }

    useEffect(()=>{
        searchMovies('Spiderman')
    }, [])

    return(
        <h1>App</h1>
    )
}

export default App