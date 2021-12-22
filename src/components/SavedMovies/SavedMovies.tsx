import { useState } from "react";
import { CategoryTypes } from "../../utils/constants";
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
  const [query, setQuery] = useState<{ searchQuery: string; short: boolean }>();

  function searchMovies(values: { searchQuery: string; short: boolean }) {
    setQuery(values);
  }

  let content;

  if (query) {
    const filterMovies = movies.filter((movie: MovieType) => {
      if (query.short && movie.duration >= 40) {
        return false;
      }

      return movie.nameRU.includes(query.searchQuery);
    });

    if (filterMovies) {
      if (filterMovies.length) {
        content = (
          <>
            <MoviesCardList
              movies={filterMovies}
              favoredMovies={movies!}
              handleSave={handleSave}
              section={CategoryTypes.favored}
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
