import React from "react";
import '../styles.css';

export default function MoviesCard({movie, isWatchlist, toggleWatchlist}) {

    const handleError = (e) => {
        e.target.src = "/images/default.jpg";
    }

    const movieRating = (rating) => {
        return rating >= 7 ? "rating-good" : rating >= 4 ? "rating-ok" : "rating-bad";
    };

    return(
        <div key={movie.id} className='movie-card'>
        <img src = {`images/${movie.image}`} 
             alt={movie.title} 
             onError={handleError}/>
        <div className='movie-card-info'>

          <h3 className='movie-card-title'>{movie.title}</h3>
          
          <div>
            <span className='movie-card-genre'>{movie.genre}</span>
            <span className={`movie-card-rating ${movieRating(movie.rating)}`}>
             {movie.rating}
            </span>
          </div>
          {/* <div> */}
            <label className="switch">
            <input type="checkbox" checked={isWatchlist} onChange={() => toggleWatchlist(movie.id)}>
            </input>
            <span className="slider">
              <span>
                <span className="slider-label"> {isWatchlist ? "In WatchList" : "Add to Watchlist"}</span>
                
              </span>
            </span>
            </label>
          {/* </div> */}

        </div>
      </div>
    );
}