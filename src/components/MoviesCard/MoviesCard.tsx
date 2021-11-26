import { Movie } from "../../utils/types";
import {
  DurationMovie,
  FrameFromMovie,
  MoviesCardContainer,
  NameMovie,
  NameMovieAndRadio,
  Radio,
} from "./MoviesCard.style";

function MoviesCard({ movie }: { movie: Movie }) {
  return (
    <MoviesCardContainer>
      <FrameFromMovie frame={movie.frame}></FrameFromMovie>
      <NameMovieAndRadio>
        <NameMovie>{movie.name}</NameMovie>
        <Radio></Radio>
      </NameMovieAndRadio>
      <DurationMovie>{movie.duration}</DurationMovie>
    </MoviesCardContainer>
  );
}

export default MoviesCard;
