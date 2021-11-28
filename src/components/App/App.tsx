import { Route, Routes } from "react-router-dom";
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
  return (
    <Body>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="movies" element={<Movies />} />
          <Route path="saved-movies" element={<SavedMovies />} />
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
