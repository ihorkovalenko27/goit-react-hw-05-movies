import { Link, useLocation } from 'react-router-dom';
import s from './MoviesList.module.css';
const BASE_URL = 'https://image.tmdb.org/t/p/w300';

export default function MoviesList({ movies }) {
  const location = useLocation();
  return (
    <>
      {movies && (
        <ul className={s.link}>
          {movies.map(film => (
            <li className={s.item} key={film.id}>
              <Link
                className={s.link}
                to={{
                  pathname: `/movies/${film.id}`,
                  state: { from: location },
                }}
              >
                <img src={`${BASE_URL}${film.poster_path}`} alt="" />
                {film.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
