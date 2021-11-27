import { movies } from "../../utils/lists";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import { MoviesContainer, More } from "./Movies.style";

function Movies() {
  return (
    <MoviesContainer>
      <SearchForm />
      <MoviesCardList movies={movies} />
      <More>Ещё</More>
      <Preloader />
    </MoviesContainer>
  );
}

export default Movies;
