import { movies } from "../../utils/lists";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import { SavedMoviesContainer } from "./SavedMovies.style";

function SavedMovies() {
  const savedMovies = movies.filter((movie) => movie.saved === true);

  return (
    <SavedMoviesContainer>
      <SearchForm />
      <MoviesCardList movies={savedMovies} />
    </SavedMoviesContainer>
  );
}

export default SavedMovies;
