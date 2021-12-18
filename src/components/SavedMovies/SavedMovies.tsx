import { useState } from "react";
import { MovieType } from "../../utils/types";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import { NotFound, SavedMoviesContainer } from "./SavedMovies.style";

function SavedMovies({
  movies,
  error,
  handleSave,
}: {
  movies: MovieType[];
  error: boolean;
  handleSave: (movieId: number) => void;
}) {
  const [filterMovies, setFilterMovies] = useState<MovieType[]>();
  const [load, setLoad] = useState(false);

  function searchMovies(searchQuery: string) {
    setLoad(true);

    if (!movies) {
      return;
    }

    setFilterMovies(
      movies.filter((movie: MovieType) => {
        return movie.nameRU.includes(searchQuery);
      })
    );
  }

  let content;

  if (load) {
    if (filterMovies) {
      if (filterMovies.length) {
        content = (
          <>
            <MoviesCardList
              movies={filterMovies}
              favoredMovies={movies!}
              handleSave={handleSave}
            />
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
    <SavedMoviesContainer>
      <SearchForm searchMovies={searchMovies} />
      {content}
    </SavedMoviesContainer>
  );
}

export default SavedMovies;
