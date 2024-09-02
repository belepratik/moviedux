// import logo from './logo.png';
import './App.css';
import './styles.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MoviesGrid from './components/MoviesGrid';
import Watchlist from './components/Watchlist';
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

// import Test1 from './components/Test1';

function App() {

  const [movies, setMovies] = useState([]); 
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    fetch('movies.json')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setMovies(data);
    });
    // // Load watchlist from local storage
    // const savedWatchlist = JSON.parse(localStorage.getItem('watchlist'));
    // if (savedWatchlist) {
    //   setWatchlist(savedWatchlist);
    // }
 },[]);

  const toggleWatchlist = (movieId) => {
    setWatchlist(watchlist.includes(movieId) ? watchlist.filter(id => id !== movieId) : [...watchlist, movieId]);
    // // Save watchlist to local storage
    // localStorage.setItem('watchlist', JSON.stringify(toggleWatchlist));
  }


  return (
    <div className="App">

      <div className="container">
        <Header></Header>
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>  
                <Link to="/watchlist">Watchlist</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<MoviesGrid movies= {movies} watchlist = {watchlist} toggleWatchlist={toggleWatchlist}/>}></Route>
            <Route 
                path="/watchlist" 
                  element={
                      <Watchlist watchlist = {watchlist} 
                      movies= {movies} 
                      toggleWatchlist={toggleWatchlist}
                      />
                  }
            ></Route>
          </Routes>

        </Router>  -
        {/* <MoviesGrid></MoviesGrid> */}
        {/* <Test1></Test1> */}
      </div>
      <Footer>
      </Footer>
    </div>
  );
}

export default App;
