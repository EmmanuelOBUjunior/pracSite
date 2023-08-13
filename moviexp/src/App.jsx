//29220acb
import {useEffect, useState} from 'react'
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from './MovieCard'


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
    const [movies, setMovies] = useState([])
   
    const searchMovies = async(title)=>{
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = response.json()


        data.then(function(result){
            setMovies(result.Search)
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

                {
                    movies?.length > 0 ? (
                        
                    )
                }

                <MovieCard
                Type={movie1.Type}
                Title={movie1.Title}
                Poster={movie1.Poster}
                Year={movie1.Year}
                />
            </div>

        </div>
    )
}

export default App