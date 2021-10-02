import { useState, useEffect } from 'react';
import {
  useParams,
  NavLink,
  useRouteMatch,
  Route,
  useLocation,
  useHistory,
} from 'react-router-dom';
import * as movieApi from '../services/movieApi';
import s from './MovieDetailsPage.module.css';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';

export default function MoviesDetailsPage() {
  const history = useHistory();
  const location = useLocation();
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  const [movies, setMovie] = useState(null);
  useEffect(() => {
    movieApi.fetchOneFilm(movieId).then(setMovie);
  }, [movieId]);

  const onGoBack = () => {
    location.state
      ? history.push(location.search ? location.state.from + location.search : location.state.from)
      : history.push('/');
  };

  return (
    <>
      {movies && (
        <>
          <button className={s.button} type="button" onClick={onGoBack}>
            Go back
          </button>
          <div className={s.info}>
            <img
              className={s.img}
              src={`https://image.tmdb.org/t/p/w300${movies.poster_path}`}
              alt=""
            />
            <div>
              <h2>
                {movies.title} ({movies.release_date.slice(0, 4)})
              </h2>
              <p>User score : {movies.vote_average * 10}%</p>
              <h3>Overview</h3>
              <p>{movies.overview}</p>
              <h3>Genres</h3>
              <ul className={s.genres}>
                {movies.genres.map(genre => (
                  <li className={s.genres} key={genre.name}>
                    {genre.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <hr />

          <h3>Additional information</h3>

          <NavLink
            className={s.link}
            to={{
              state: {
                from: location.state.from,
              },
              pathname: `${url}/cast`,
            }}
          >
            Cast
          </NavLink>
          <NavLink
            className={s.link}
            to={{
              state: {
                from: location.state.from,
              },
              pathname: `${url}/reviews`,
            }}
          >
            Review
          </NavLink>
          <hr />

          <Route path={`${path}/cast`}>
            <Cast />
          </Route>

          <Route path={`${path}/reviews`}>
            <Reviews />
          </Route>
        </>
      )}
    </>
  );
}
