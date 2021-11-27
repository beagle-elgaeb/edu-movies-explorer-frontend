import { MovieType } from "../../utils/types";
import MoviesCard from "../MoviesCard/MoviesCard";
import { MoviesListContainer } from "./MoviesCardList.style";

function MoviesCardList({ movies }: { movies: MovieType[] }) {
  return (
    <MoviesListContainer>
      {movies.map((movie, i) => (
        <MoviesCard key={i} movie={movie} />
      ))}
    </MoviesListContainer>
  );
}

export default MoviesCardList;
