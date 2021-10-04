import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as movieApi from '../../services/movieApi';
import s from './Reviews.module.css';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    movieApi.fetchReview(movieId).then(data => setReviews(data.results));
  }, [movieId]);

  return reviews.length !== 0 ? (
    <>
      <ul className={s.list}>
        {reviews.map(({ author, id, content }) => {
          return (
            <li key={id}>
              <h2>Author: {author}</h2>
              <p>{content}</p>
            </li>
          );
        })}
      </ul>
    </>
  ) : (
    <h3> We don't have any reviews of this film </h3>
  );
}
