import { savedMovies } from "../../utils/lists";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./SavedMovies.css";

function SavedMovies() {
  return (
    <>
      <MoviesCardList movies={savedMovies} />
    </>
  );
}

export default SavedMovies;
