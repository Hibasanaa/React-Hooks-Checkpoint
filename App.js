
import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';

const App = () => {
  const [movies, setMovies] = useState([
    // Example movies
    {
      title: 'Inception',
      description: 'A thief who enters the dreams of others to steal secrets.',
      posterURL: 'https://example.com/inception.jpg',
      rating: 8.8
    },
    {
      title: 'The Matrix',
      description: 'A computer hacker learns about the true nature of reality.',
      posterURL: 'https://example.com/matrix.jpg',
      rating: 8.7
    },
    // Add more movies here
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleFilter = ({ title, rating }) => {
    const lowercasedTitle = title.toLowerCase();
    const filtered = movies.filter(movie =>
      (lowercasedTitle ? movie.title.toLowerCase().includes(lowercasedTitle) : true) &&
      (rating ? movie.rating >= parseFloat(rating) : true)
    );
    setFilteredMovies(filtered);
  };

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
    setFilteredMovies([...movies, newMovie]); // Update filtered list as well
  };

  return (
    <div className="app">
      <Filter onFilter={handleFilter} />
      <MovieList movies={filteredMovies} />
      {/* Implement an add movie form to use handleAddMovie */}
    </div>
  );
};

export default App;
import AddMovieForm from './AddMovieForm';

// Inside App component's return
<AddMovieForm onAdd={handleAddMovie} />
