const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'e1dc0950adfff1d55dde13d1f87786fb';

export function fetchPopularFilms() {
  return fetch(`${BASE_URL}trending/movie/week?api_key=${API_KEY}`).then(response => {
    return response.ok ? response.json() : Promise.reject(new Error('Error!'));
  });
}

export function fetchOneFilm(id) {
  return fetch(`${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`).then(response => {
    return response.ok ? response.json() : Promise.reject(new Error('Error!'));
  });
}

export function fetchMovieCast(id) {
  return fetch(`${BASE_URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US`).then(
    response => {
      return response.ok ? response.json() : Promise.reject(new Error('Error!'));
    },
  );
}

export function fetchReview(id) {
  return fetch(`${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}&language=en-US`).then(
    response => {
      return response.ok ? response.json() : Promise.reject(new Error('Error!'));
    },
  );
}

export function fetchSearchFilm(searchQuery) {
  return fetch(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${searchQuery}`).then(response => {
    return response.ok ? response.json() : Promise.reject(new Error('Error!'));
  });
}
