import { Switch, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from './components/Container/Container';
import AppBar from './components/AppBar/AppBar';

const HomePage = lazy(() => import('./components/HomePage/HomePage'));
const MovieDetailsPage = lazy(() => import('./components/MoviesDetailsPage/MoviesDetailsPage'));
const MoviesPage = lazy(() => import('./components/MoviesPage/MoviesPage'));
const NotFoundPage = lazy(() => import('./components/NotFoundPage/NotFoundPage'));

function App() {
  return (
    <Container>
      <AppBar />

      <Suspense fallback={<div>ЗАГРУЖАЕМ...</div>}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Suspense>

      <ToastContainer autoClose={2000} />
    </Container>
  );
}

export default App;
