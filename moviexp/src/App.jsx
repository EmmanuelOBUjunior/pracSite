//29220acb
import {useEffect} from 'react'
import './App.css'
import SearchIcon from './search.svg'


const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=29220acb'

const movie1 =
    {
        "Title": "Superman, Spiderman or Batman",
        "Year": "2011",
        "imdbID": "tt2084949",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg"
    }

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
                <input 
                value = "Superman"
                onChange={()=>{}}
                placeholder='Search For Movie' />
                <img 
                src={SearchIcon} 
                alt="Search" 
                onClick={()=>{}}
                />
            </div>

            <div className="container">
                <div className="movie">
                    <div>
                        <p>{movie1.Year}</p>
                    </div>
                    <div>
                    <img src={movie1.Poster !== "N/A" ? movie1.Poster : 'https://via.placeholder.com/400'} alt={movie1.Title} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default App