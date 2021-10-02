import { useState, useEffect } from 'react';
import * as movieApi from '../services/movieApi';
import MoviesList from '../MoviesList/MoviesList';
export default function HomePage() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    movieApi.fetchPopularFilms().then(data => setMovies(data.results));
  }, []);

  return (
    <>
      <MoviesList movies={movies} />
    </>
  );
}
