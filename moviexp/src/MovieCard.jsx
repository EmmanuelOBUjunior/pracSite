import React from 'react'

const MovieCard = ({Title, Year, Poster}) => {
  return (
    <>
    <div className="movie">
                    <div>
                        <p>{Year}</p>
                    </div>
                    <div>
                    <img src={Poster !== "N/A" ?Poster : 'https://via.placeholder.com/400'} alt={movie1.Title} />
                    </div>
                    <div>
                        <span>{Type}</span>
                        <h3>{movie1.Title}</h3>
                    </div>
                </div>
    </>
  )
}

export default MovieCard