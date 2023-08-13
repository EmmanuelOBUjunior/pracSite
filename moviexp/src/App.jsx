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
        <div className="app">
            <h1>MoviExp</h1>

            <div className="search">
                <input placeholder='Search For Movie' />
                <img src={SearchIcon} alt="Search" />
            </div>
        </div>
    )
}

export default App