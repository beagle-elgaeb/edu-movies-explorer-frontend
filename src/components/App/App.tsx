import { Route, Routes } from "react-router-dom";
import AboutProject from "../AboutProject/AboutProject";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import SavedMovies from "../SavedMovies/SavedMovies";
import "./App.css";

function App() {
  return (
    <div>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<AboutProject />} />

            <Route path="/movies" element={<Movies />} />

            <Route path="/saved-movies" element={<SavedMovies />} />

            <Route path="/profile" element={<Profile />} />

            <Route path="/signin" element={<Login />} />

            <Route path="/signup" element={<Register />} />

            {/* <Route exact path="/">
              {loggedIn ? (
                <Redirect to="/content" />
              ) : (
                <Redirect to="/sign-in" />
              )}
            </Route> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
