import { movies } from "../../utils/lists";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { SavedMoviesContainer } from "./SavedMovies.style";

function SavedMovies() {
  const savedMovies = movies.filter((movie) => movie.saved === true);

  return (
    <SavedMoviesContainer>
      <MoviesCardList movies={savedMovies} />
    </SavedMoviesContainer>
  );
}

export default SavedMovies;
