import { useLocation, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import * as movieApi from '../../services/movieApi';
import 'react-toastify/dist/ReactToastify.css';
import MoviesList from '../../components/MoviesList/MoviesList';
export default function MoviesPage() {
  const location = useLocation();
  const history = useHistory();
  const [query, setQuery] = useState('');
  const [movies, setMovie] = useState([]);
  useEffect(() => {
    if (location.search !== '') {
      const queryValue = new URLSearchParams(location.search).get('query');
      getFilms(queryValue);
    }
  }, [location.search]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (query === '') {
      toast.error('We did not find your movie!');
      return;
    }
    getFilms(query);
    history.push({
      search: `query=${query}`,
      state: { from: location.pathname },
    });
  };

  const getFilms = query => {
    movieApi.fetchSearchFilm(query).then(data => {
      if (data.results.length === 0) {
        toast.error('We did not find your movie!');
        return;
      }
      setMovie(data.results);
    });
    setQuery('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputChange} value={query} />
        <button type="submit">Search</button>
      </form>
      <MoviesList movies={movies} />
    </>
  );
}
