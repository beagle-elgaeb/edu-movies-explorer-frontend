import { movies } from "../../utils/lists";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./SavedMovies.css";

function SavedMovies() {
  const savedMovies = movies.filter((movie) => movie.saved === true);

  return (
    <>
      <MoviesCardList movies={savedMovies} />
    </>
  );
}

export default SavedMovies;
