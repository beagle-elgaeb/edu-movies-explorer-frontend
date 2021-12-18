import produce from "immer";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import {
  getFavoredMovies,
  postFavoredCards,
  removeFavoredCards,
} from "../../utils/MainApi";
import { getMovies } from "../../utils/MoviesApi";
import { MovieApiType, MovieType } from "../../utils/types";
import Login from "../Login/Login";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import ErrorPopup from "../NotFoundPage/NotFoundPage";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import SavedMovies from "../SavedMovies/SavedMovies";
import { Body } from "./App.style";
import { Layout, LayoutWithoutHeader } from "./AppLayout";

function App() {
  const [movies, setMovies] = useState<MovieType[]>();
  const [favoredMovies, setFavoredMovies] = useState<MovieType[]>();
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(false);

  const localStorageKey = "favoredMovies";

  async function loadMovies() {
    const localStorageKey = "movies";
    const savedMovies = localStorage.getItem(localStorageKey);

    if (savedMovies) {
      try {
        return JSON.parse(savedMovies);
      } catch {
        localStorage.removeItem(localStorageKey);
      }
    }

    try {
      setError(false);

      const res = await getMovies();

      if (!res) {
        return;
      }

      const apiLoadedMovies = res.map((item: MovieApiType) => {
        return {
          id: item.id,
          nameRU: item.nameRU,
          duration: item.duration,
          trailerLink: item.trailerLink,
          image: item.image.url,
        };
      });

      localStorage.setItem(localStorageKey, JSON.stringify(apiLoadedMovies));

      return apiLoadedMovies;
    } catch (err) {
      setError(true);
      console.log(err);
    }
  }

  async function searchMovies(searchQuery: string) {
    setLoad(true);

    const loadedMovies = await loadMovies();

    setMovies(
      loadedMovies.filter((movie: MovieType) => {
        return movie.nameRU.includes(searchQuery);
      })
    );
  }

  useEffect(() => {
    async function loadFavoredMovies() {
      const savedMovies = localStorage.getItem(localStorageKey);

      if (savedMovies) {
        try {
          return JSON.parse(savedMovies);
        } catch {
          localStorage.removeItem(localStorageKey);
        }
      }

      try {
        setError(false);

        const res = await getFavoredMovies();

        if (!res) {
          return;
        }

        const apiLoadedMovies = res.map((item): MovieType => {
          return {
            id: item.movieId,
            nameRU: item.nameRU,
            duration: item.duration,
            trailerLink: item.trailer,
            image: item.image,
          };
        });

        setFavoredMovies(apiLoadedMovies);
        localStorage.setItem(localStorageKey, JSON.stringify(apiLoadedMovies));
      } catch (err) {
        setError(true);
        console.log(err);
      }
    }

    loadFavoredMovies();
  }, [favoredMovies]);

  async function handleSaveMovie(movieId: number) {
    const favoredMovie = favoredMovies?.find(
      (favoredMovie) => favoredMovie.id === movieId
    );

    if (favoredMovie) {
      try {
        await removeFavoredCards(movieId);

        const newState = produce(favoredMovies, (movies) => {
          const onSaveMovie = movies!.find((movie) => movie.id === movieId);
          const onSaveMovieId = movies!.indexOf(onSaveMovie!);

          movies!.slice(onSaveMovieId, 1);
        });

        setFavoredMovies(newState);

        localStorage.setItem(localStorageKey, JSON.stringify(newState));
      } catch (err) {
        console.log(err);
      }
    } else {
      const movie = movies?.find((movie) => movie.id === movieId)!;

      try {
        await postFavoredCards({
          movieId: movie.id,
          nameRU: movie.nameRU,
          duration: movie.duration,
          trailer: movie.trailerLink,
          image: movie.image,
        });

        const newState = produce(favoredMovies, (movies) => {
          movies?.push({
            id: movie.id,
            nameRU: movie.nameRU,
            duration: movie.duration,
            trailerLink: movie.trailerLink,
            image: movie.image,
          });
        });

        setFavoredMovies(newState);

        localStorage.setItem(localStorageKey, JSON.stringify(newState));
      } catch (err) {
        console.log(err);
      }
    }
  }

  //Говняное говно

  return (
    <Body>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route
            path="movies"
            element={
              <Movies
                movies={movies ?? []}
                favoredMovies={favoredMovies ?? []}
                error={error}
                load={load}
                searchMovies={searchMovies}
                handleSave={handleSaveMovie}
              />
            }
          />
          <Route
            path="saved-movies"
            element={
              <SavedMovies
                movies={favoredMovies ?? []}
                error={error}
                handleSave={handleSaveMovie}
              />
            }
          />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/" element={<LayoutWithoutHeader />}>
          <Route path="signin" element={<Login />} />
          <Route path="signup" element={<Register />} />
        </Route>
        <Route path="*" element={<ErrorPopup />} />
      </Routes>
    </Body>
  );
}

export default App;
