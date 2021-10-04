import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as movieApi from '../../services/movieApi';
import s from './Cast.module.css';
const BASE_URL = 'https://image.tmdb.org/t/p/w200';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    movieApi.fetchMovieCast(movieId).then(data => setCast(data.cast));
  }, [movieId]);

  return (
    <>
      <ul className={s.list}>
        {cast.map(({ name, id, profile_path, character }) => {
          return (
            <li key={id} className={s.item}>
              <img src={`${BASE_URL}${profile_path}`} alt="" className={s.img} />
              {name}
              <p>Character: {character}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
