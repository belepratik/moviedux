import React from 'react';
import '../styles.css';
import MoviesCard from './MovieCard';

export default function Watchlist({movies, watchlist, toggleWatchlist}) {
    return(
        <div>
            <h1 className='title'>Your Watchlist</h1>
            <div className='watchlist'>
                {
                    watchlist.map(id => {
                        const movie = movies.find(movie => movie.id === id);
                        return <MoviesCard 
                                key={id} 
                                movie={movie} 
                                toggleWatchlist={toggleWatchlist} 
                                isWatchlist={true}></MoviesCard>
                    })
                }
            </div>
        </div>
    );
}