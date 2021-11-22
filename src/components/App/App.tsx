import styled from "@emotion/styled";
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
    <Body>
      <BodyContainer>
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
      </BodyContainer>
    </Body>
  );
}

export default App;

const Body = styled.div`
  width: 100%;
  max-width: 1280px;
  min-width: 320px;
  background: #202020;
  margin: 0 auto;
  box-shadow: 0 0 10px 1px #000000;
`;

const BodyContainer = styled.div`
  width: 89%;
  margin: 0 auto;

  @media (max-width: 900px) {
    width: 92%;
  }

  @media (max-width: 400px) {
    width: 94%;
  }
`;
