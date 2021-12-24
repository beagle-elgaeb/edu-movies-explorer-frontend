import { useState } from "react";
import { CategoryTypes, KeysTypes } from "../../utils/constants";
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
  const [query, setQuery] = useState<{ searchQuery: string; short: boolean }>(
    () => {
      const data = localStorage.getItem(KeysTypes.favoredSearch);

      return data ? JSON.parse(data).query : undefined;
    }
  );

  const [filterMovies, setFilterMovies] = useState<MovieType[]>(() => {
    const data = localStorage.getItem(KeysTypes.favoredSearch);

    return data ? JSON.parse(data).filtered : undefined;
  });

  function searchMovies(values: { searchQuery: string; short: boolean }) {
    setQuery(values);

    const filtered = movies.filter((movie: MovieType) => {
      if (values.short && movie.duration >= 40) {
        return false;
      }

      return movie.nameRU
        .toLowerCase()
        .includes(values.searchQuery.toLowerCase());
    });

    setFilterMovies(filtered);
    
    localStorage.setItem(
      KeysTypes.favoredSearch,
      JSON.stringify({ query: values, filtered })
    );
  }

  let content;

  if (query) {
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
