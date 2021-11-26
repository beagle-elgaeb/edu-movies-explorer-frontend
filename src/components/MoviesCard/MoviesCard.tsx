import { Movie } from "../../utils/types";
import {
  DurationMovie,
  FrameFromMovie,
  MoviesCardContainer,
  NameMovie,
  NameMovieAndCheck,
  CheckLabel,
  CheckInput,
  Check,
} from "./MoviesCard.style";

function MoviesCard({ movie }: { movie: Movie }) {
  return (
    <MoviesCardContainer>
      <FrameFromMovie frame={movie.frame}></FrameFromMovie>
      <NameMovieAndCheck>
        <NameMovie>{movie.name}</NameMovie>
        <CheckLabel>
          <CheckInput type="checkbox" checked={movie.saved}></CheckInput>
          <Check></Check>
        </CheckLabel>
      </NameMovieAndCheck>
      <DurationMovie>{movie.duration}</DurationMovie>
    </MoviesCardContainer>
  );
}

export default MoviesCard;
