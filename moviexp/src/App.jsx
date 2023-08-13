//29220acb
import {useEffect, useState} from 'react'
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from './MovieCard'


const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=29220acb'


const App = () =>{
    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
   
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

            
            {
            movies?.length > 0 ? (

                <div className="container">
                    {movies.map((movie)=>(
                        <MovieCard
                        Type={movie.Type}
                        Title={movie.Title}
                        Poster={movie.Poster}
                        Year={movie.Year}
                        />   
                    ))}              
                </div>
                    ):(
                        <div className='empty'>
                            <h3>Movie Not Found</h3>
                        </div>
                )   
                }
        </div>
    )
}

export default App