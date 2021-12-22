import { useState } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { KeysTypes } from "../../utils/constants";
import { getProfileData, logout } from "../../utils/MainApi";
import { UserType } from "../../utils/types";
import Login from "../Login/Login";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import ErrorPopup from "../NotFoundPage/NotFoundPage";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import SavedMovies from "../SavedMovies/SavedMovies";
import { Body } from "./App.style";
import { Layout, LayoutWithoutHeader } from "./AppLayout";
import { useWhisMovies } from "./utils";

function App() {
  const [currentUser, setCurrentUser] = useState<UserType | undefined>(() => {
    const auth = localStorage.getItem(KeysTypes.profile);

    if (auth) {
      return JSON.parse(auth);
    } else {
      return undefined;
    }
  });

  const { movies, favoredMovies, error, query, searchMovies, handleSaveMovie } =
    useWhisMovies(currentUser);


  async function loadProfile() {
    try {
      const user = await getProfileData();

      setCurrentUser(user);

      localStorage.setItem(KeysTypes.profile, JSON.stringify(user));
    } catch (err) {
      console.log(err);
    }
  }

  async function handleLogout() {
    await logout();
    localStorage.removeItem(KeysTypes.profile);
    localStorage.removeItem(KeysTypes.favored);

    setCurrentUser(undefined);
  }

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
                    movies={movies}
                    favoredMovies={favoredMovies ?? []}
                    error={error}
                    load={!!query}
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
              <Route
                path="profile"
                element={
                  <Profile
                    loadProfile={loadProfile}
                    handleLogout={handleLogout}
                  />
                }
              />
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

function AppAuth({ currentUser }: { currentUser: UserType | undefined }) {
  return <>{currentUser ? <Outlet /> : <Navigate to="/" />}</>;
}

function AppNotAuth({ currentUser }: { currentUser: UserType | undefined }) {
  return <>{currentUser ? <Navigate to="/movies" /> : <Outlet />}</>;
}
