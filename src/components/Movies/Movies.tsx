import { movies } from "../../utils/lists";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import { MoviesContainer, More } from "./Movies.style";

function Movies() {
  return (
    <MoviesContainer>
      <SearchForm />
      <MoviesCardList movies={movies} />
      <More>Ещё</More>
    </MoviesContainer>
  );
}

export default Movies;
