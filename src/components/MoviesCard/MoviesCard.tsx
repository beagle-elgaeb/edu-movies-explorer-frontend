import { CategoryTypes } from "../../utils/constants";
import { MovieType } from "../../utils/types";
import {
  Check,
  CheckInput,
  CheckLabel,
  DurationMovie,
  FrameFromMovie,
  MoviesCardContainer,
  NameMovie,
  DeleteButton,
  NameMovieAndCheckOrDel,
} from "./MoviesCard.style";

function MoviesCard({
  movie,
  isSaved,
  handleSave,
  section,
}: {
  movie: MovieType;
  handleSave: (movieId: number) => void;
  isSaved?: boolean;
  section: CategoryTypes;
}) {
  return (
    <MoviesCardContainer>
      <FrameFromMovie
        image={movie.image}
        href={movie.trailerLink}
        target="_blank"
      ></FrameFromMovie>
      <NameMovieAndCheckOrDel>
        <NameMovie>{movie.nameRU}</NameMovie>
        {section === CategoryTypes.movies ? (
          <CheckLabel>
            <CheckInput
              type="checkbox"
              checked={isSaved}
              onChange={() => handleSave(movie.id)}
            ></CheckInput>
            <Check></Check>
          </CheckLabel>
        ) : null}
        {section === CategoryTypes.favored ? (
          <DeleteButton
            type="button"
            onClick={() => handleSave(movie.id)}
          ></DeleteButton>
        ) : null}
      </NameMovieAndCheckOrDel>
      <DurationMovie>
        {Math.floor(movie.duration / 60)}ч
        {movie.duration - Math.floor(movie.duration / 60) * 60}м
      </DurationMovie>
    </MoviesCardContainer>
  );
}

export default MoviesCard;
