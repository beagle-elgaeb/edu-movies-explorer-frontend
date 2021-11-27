import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Main from "../Main/Main";
import MenuPopup from "../MenuPopup/MenuPopup";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import SavedMovies from "../SavedMovies/SavedMovies";
import { Body } from "./App.style";

function App() {
  const [menuPopupOpen, setMenuPopupOpen] = useState(false);

  function closeAllPopups() {
    setMenuPopupOpen(false);
  }

  function handleMenuClick() {
    setMenuPopupOpen(true);
  }

  return (
    <Body>
      <MenuPopup isOpen={menuPopupOpen} onClose={closeAllPopups} />
      <div>
        <Header onMenuClick={handleMenuClick} />
        <main>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/saved-movies" element={<SavedMovies />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<Register />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </Body>
  );
}

export default App;
