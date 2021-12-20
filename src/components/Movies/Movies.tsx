import useEvent from "@react-hook/event";
import { useThrottle } from "@react-hook/throttle";
import { useState } from "react";
import {  MovieType } from "../../utils/types";
import { getPagination } from "../../utils/utils";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import { More, MoviesContainer, NotFound } from "./Movies.style";

function Movies({
  movies,
  favoredMovies,
  error,
  load,
  searchMovies,
  handleSave,
}: {
  movies: MovieType[];
  favoredMovies: MovieType[];
  error: boolean;
  load: boolean;
  searchMovies: (searchQuery: string) => void;
  handleSave: (movieId: number) => void;
}) {
  const [pagination, setPagination] = useThrottle(getPagination, 1);
  const { startRows, countInRow, plus } = pagination;
  const [clickCount, setCountRows] = useState(0);
  const countRows = startRows + clickCount;

  useEvent(window, "resize", () => {
    setPagination(getPagination());
  });

  let content;

  if (load) {
    if (movies) {
      if (movies.length) {
        content = (
          <>
            <MoviesCardList
              movies={movies.slice(0, countRows * countInRow)}
              favoredMovies={favoredMovies}
              handleSave={handleSave}
            />
            {movies.length >= countRows * countInRow ? (
              <More onClick={() => setCountRows(countRows + plus)}>Ещё</More>
            ) : null}
          </>
        );
      } else {
        content = <NotFound>Ничего не найдено</NotFound>;
      }
    } else {
      if (error) {
        content = (
          <NotFound>
            Во время запроса произошла ошибка. Возможно, проблема с соединением
            или сервер недоступен. Подождите немного и попробуйте ещё раз
          </NotFound>
        );
      } else {
        content = <Preloader />;
      }
    }
  }

  return (
    <MoviesContainer>
      <SearchForm searchMovies={searchMovies} />
      {content}
    </MoviesContainer>
  );
}

export default Movies;
