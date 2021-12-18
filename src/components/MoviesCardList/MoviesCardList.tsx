import { MovieType } from "../../utils/types";
import MoviesCard from "../MoviesCard/MoviesCard";
import { MoviesListContainer } from "./MoviesCardList.style";

function MoviesCardList({
  movies,
  favoredMovies,
  handleSave,
}: {
  movies: MovieType[];
  favoredMovies: MovieType[];
  handleSave: (movieId: number) => void;
}) {
  return (
    <MoviesListContainer>
      {movies.map((movie, i) => (
        <MoviesCard
          key={i}
          movie={movie}
          handleSave={handleSave}
          isSaved={
            !!favoredMovies.find((favoredMovie) => favoredMovie.id === movie.id)
          }
        />
      ))}
    </MoviesListContainer>
  );
}

export default MoviesCardList;
