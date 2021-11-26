import { movies } from "../../utils/lists";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies() {
  return (
    <>
      <MoviesCardList movies={movies} />
    </>
  );
}

export default Movies;
