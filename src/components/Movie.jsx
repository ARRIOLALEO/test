import React from 'react'
function Movie({movieList = [], handleFavoriteMovie, favMovie=[], handleRemoveMovie}) {
  return (
    <div className='movie-collection'>
        {
            (movieList !==undefined||movieList!==null)&&
            movieList.map((movie,index)=>{
              
                
                const {Poster, Title}=movie
                return(
                    <div className={ !favMovie.includes(movie) ? 'single-movie': 'single-movie selected' } key={index}>
                        <img src={Poster} alt='somethign'/>
                        <h3>{Title}</h3>
                        <button className={ favMovie.includes(Title) ? 'hidenBtn': '' } onClick={()=>{handleFavoriteMovie(Title)}} >Add to favorite
                        </button>
                        <button className={!favMovie.includes(Title) ? 'hidenBtn': '' } onClick={() => handleRemoveMovie(movie)}>Remove from favorite</button>

                    </div>
                )
            })
        }
    </div>
  )
}

export default Movie