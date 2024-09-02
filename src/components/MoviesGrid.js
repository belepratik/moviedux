import React, {useState} from 'react';
import '../styles.css';
import MovieCard from './MovieCard';

export default function MoviesGrid({movies, watchlist, toggleWatchlist}) {

  // const [movies, setMovies] = useState([]); //useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const [genre, setGenre] = useState("All Genre");
  const [rating, setRating] = useState("All");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleGenreChange = (e) => {
    setGenre(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const matchesRating = (movie, rating) => {
    switch(rating){
      case 'All':
        return true;
      case 'Good':
        return movie.rating >= 8;
      case 'Ok':
        return movie.rating >= 4 && movie.rating < 8;
      case 'Bad':
        return movie.rating <= 4;    
      default:
        return false;
    }
  }


  const matchesGenre = (movie, genre) => {
    return genre === "All Genre" || movie.genre.toLowerCase() === genre.toLowerCase();
  }

  const matchSearchTerm = (movie, searchTerm) => {
    return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
  }

  const filteredMovies = movies.filter(movie => 
    matchesGenre(movie, genre) && matchesRating(movie, rating) && 
    matchSearchTerm(movie, searchTerm)
  );

 return(
  <div>

    <div>

          <input type='text'
             placeholder='Search...' 
             className='search-input' 
             value={searchTerm}
             onChange={handleSearchChange}
          />
    <div  className="filter-bar">

      <div className="filter-slot">
        <label>Genre</label>
        <select className="filter-dropdown"
                value={genre}
                onChange={handleGenreChange}>
          <option>All Genre</option>
          <option>Action</option>
          <option>Drama</option>
          <option>Fantasy</option>
          <option>Horror</option>
        </select>
      </div>

      <div className="filter-slot">
        <label>Rating</label>
        <select className="filter-dropdown"
                value={rating}
                onChange={handleRatingChange}>
          <option>All</option>
          <option>Good</option>
          <option>Ok</option>
          <option>Bad</option>
        </select>
      </div>

    </div>

    </div>


    <div className='movies-grid'>
      {
        filteredMovies.map(movie => (
          <MovieCard 
            movie = {movie} 
            key={movie.id} 
            toggleWatchlist={toggleWatchlist} 
            isWatchlist={watchlist.includes(movie.id)}
            ></MovieCard> 
        ))
      }
    
    </div>

  </div>  
 );

   // basic to learn how to use useEffect
  // useEffect(() => {
  //   const m = ["a", "b", "c", "d"];
  //   setMovies(m);
  // },[]);

  // return(
  //   <div>{movies.length}</div>
  // );
}











// export default function MoviesGrid() {
//   return (
//     <div>
//       <h2 className='section-title'>Movies</h2>
//       <div className='movies-grid'>
//         <div className='movie-card'>
//           <img className='movie-poster' src='/images/1.jpg' alt='Movie 1' />
//           <h3 className='movie-title'>Movie 1</h3>
//         </div>
//         <div className='movie-card'>
//           <img className='movie-poster' src='/images/2.jpg' alt='Movie 2' />
//           <h3 className='movie-title'>Movie 2</h3>
//         </div>
//         <div className='movie-card'>
//           <img className='movie-poster' src='/images/3.jpg' alt='Movie 3' />
//           <h3 className='movie-title'>Movie 3</h3>
//         </div>
//         <div className='movie-card'>
//           <img className='movie-poster' src='/images/4.jpg' alt='Movie 4' />
//           <h3 className='movie-title'>Movie 4</h3>
//         </div>
//       </div>
//     </div>
//   );
// }