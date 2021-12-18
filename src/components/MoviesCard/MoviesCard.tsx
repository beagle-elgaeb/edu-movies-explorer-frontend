import { MovieType } from "../../utils/types";
import {
  Check,
  CheckInput,
  CheckLabel,
  DurationMovie,
  FrameFromMovie,
  MoviesCardContainer,
  NameMovie,
  NameMovieAndCheck,
} from "./MoviesCard.style";

function MoviesCard({
  movie,
  isSaved,
  handleSave,
}: {
  movie: MovieType;
  handleSave: (movieId: number) => void;
  isSaved?: boolean;
}) {
  return (
    <MoviesCardContainer>
      <FrameFromMovie image={movie.image}></FrameFromMovie>
      <NameMovieAndCheck>
        <NameMovie>{movie.nameRU}</NameMovie>
        <CheckLabel>
          <CheckInput
            type="checkbox"
            checked={isSaved}
            onChange={() => handleSave(movie.id)}
          ></CheckInput>
          <Check></Check>
        </CheckLabel>
      </NameMovieAndCheck>
      <DurationMovie>
        {Math.floor(movie.duration / 60)}ч
        {movie.duration - Math.floor(movie.duration / 60) * 60}м
      </DurationMovie>
    </MoviesCardContainer>
  );
}

export default MoviesCard;
