// src/App.js
import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovieForm from './components/AddMovieForm';
import './styles.css';


const initialMovies = [
  {
    title: 'Inception',
    description: 'A thief who steals corporate secrets through the use of dream-sharing technology.',
    posterURL: 'https://image.url/inception.jpg',
    rating: 5,
  },
  {
    title: 'The Matrix',
    description: 'A computer hacker learns about the true nature of his reality and his role in the war against its controllers.',
    posterURL: 'https://image.url/matrix.jpg',
    rating: 4,
  },
];

function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [filteredMovies, setFilteredMovies] = useState(initialMovies);

  const addMovie = (movie) => {
    const newMovies = [...movies, movie];
    setMovies(newMovies);
    setFilteredMovies(newMovies);
  };

  const filterMovies = ({ title, rating }) => {
    const filtered = movies.filter((movie) => {
      return (
        movie.title.toLowerCase().includes(title.toLowerCase()) &&
        (rating ? movie.rating >= rating : true)
      );
    });
    setFilteredMovies(filtered);
  };

  return (
    <div className="App">
      <h1>My Favorite Movies</h1>
      <Filter onFilter={filterMovies} />
      <MovieList movies={filteredMovies} />
      <AddMovieForm onAddMovie={addMovie} />
    </div>
  );
}

export default App;
