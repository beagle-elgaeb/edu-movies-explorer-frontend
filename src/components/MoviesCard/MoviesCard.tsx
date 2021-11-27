import { useState } from "react";
import { MovieType } from "../../utils/types";
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

function MoviesCard({ movie }: { movie: MovieType }) {
  const [checked, setChecked] = useState(movie.saved);

  function handleCheck() {
    setChecked(!checked);
  }

  return (
    <MoviesCardContainer>
      <FrameFromMovie frame={movie.frame}></FrameFromMovie>
      <NameMovieAndCheck>
        <NameMovie>{movie.name}</NameMovie>
        <CheckLabel>
          <CheckInput
            type="checkbox"
            checked={checked}
            onChange={handleCheck}
          ></CheckInput>
          <Check></Check>
        </CheckLabel>
      </NameMovieAndCheck>
      <DurationMovie>{movie.duration}</DurationMovie>
    </MoviesCardContainer>
  );
}

export default MoviesCard;
