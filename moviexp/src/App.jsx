//29220acb
import {useEffect} from 'react'

const API_URL = 'https://www.omdbapi.com?apikey=29220acb'
const App = () =>{
   
    const searchMovies = async(title)=>{
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = response.json()


        console.log(data)
    }

    useEffect(()=>{
        searchMovies('Superman')
    }, [])

    return(
        <h1>App</h1>
    )
}

export default App