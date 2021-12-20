import produce from "immer";
import { useEffect, useState } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import {
  getFavoredMovies,
  getProfileData,
  postFavoredCards,
  removeFavoredCards,
} from "../../utils/MainApi";
import { getMovies } from "../../utils/MoviesApi";
import { MovieApiType, MovieType, User } from "../../utils/types";
import Login from "../Login/Login";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import ErrorPopup from "../NotFoundPage/NotFoundPage";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import SavedMovies from "../SavedMovies/SavedMovies";
import { Body } from "./App.style";
import { Layout, LayoutWithoutHeader } from "./AppLayout";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {
  const [currentUser, setCurrentUser] = useState();
  const [movies, setMovies] = useState<MovieType[]>();
  const [favoredMovies, setFavoredMovies] = useState<MovieType[]>();
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("profile");

    if (!auth) {
      return;
    }

    setCurrentUser(JSON.parse(auth));
  }, []);

  async function loadMovies() {
    const savedMovies = localStorage.getItem("movies");

    if (savedMovies) {
      try {
        return JSON.parse(savedMovies);
      } catch {
        localStorage.removeItem("movies");
      }
    }

    try {
      setError(false);

      const res = await getMovies();

      const apiLoadedMovies = res.map((item: MovieApiType) => {
        return {
          id: item.id,
          nameRU: item.nameRU,
          duration: item.duration,
          trailerLink: item.trailerLink,
          image: item.image.url,
        };
      });

      localStorage.setItem("movies", JSON.stringify(apiLoadedMovies));

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
    if (!currentUser) {
      return;
    }

    async function loadFavoredMovies() {
      const savedMovies = localStorage.getItem("favoredMovies");

      if (savedMovies) {
        try {
          return JSON.parse(savedMovies);
        } catch {
          localStorage.removeItem("favoredMovies");
        }
      }

      try {
        setError(false);

        const res = await getFavoredMovies();

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
        localStorage.setItem("favoredMovies", JSON.stringify(apiLoadedMovies));
      } catch (err) {
        setError(true);
        console.log(err);
      }
    }

    loadFavoredMovies();
  }, [currentUser]);

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

        localStorage.setItem("favoredMovies", JSON.stringify(newState));
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

        localStorage.setItem("favoredMovies", JSON.stringify(newState));
      } catch (err) {
        console.log(err);
      }
    }
  }

  async function loadProfile() {
    try {
      const user = await getProfileData();

      setCurrentUser(user);

      localStorage.setItem("profile", JSON.stringify(user));
    } catch (err) {
      console.log(err);
    }
  }

  //Говняное говно

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Body>
        <Routes>
          <Route path="/" element={<Layout isLogined={!!currentUser} />}>
            <Route index element={<Main />} />

            <Route element={<AppAuth currentUser={currentUser} />}>
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
          </Route>

          <Route path="/" element={<LayoutWithoutHeader />}>
            <Route element={<AppNotAuth currentUser={currentUser} />}>
              <Route
                path="signin"
                element={<Login loadProfile={loadProfile} />}
              />
              <Route
                path="signup"
                element={<Register loadProfile={loadProfile} />}
              />
            </Route>
          </Route>

          <Route path="*" element={<ErrorPopup />} />
        </Routes>
      </Body>
    </CurrentUserContext.Provider>
  );
}

export default App;

function AppAuth({ currentUser }: { currentUser: User | undefined }) {
  return <>{currentUser ? <Outlet /> : <Navigate to="/signin" />}</>;
}

function AppNotAuth({ currentUser }: { currentUser: User | undefined }) {
  return <>{currentUser ? <Navigate to="/" /> : <Outlet />}</>;
}
