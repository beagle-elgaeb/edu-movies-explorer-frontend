import { useState } from "react";
import { movies } from "../../utils/lists";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import { NotFound, SavedMoviesContainer } from "./SavedMovies.style";

function SavedMovies() {
  const savedMovies = movies.filter((movie) => movie.saved === true);

  // Временно, для наблюдения прелоадера --------------------------------------
  // (нажатие на кнопку поиска меняет её на прелоадер на 3 секунды) -----------

  const [search, setSearch] = useState(false);

  function handleSearch() {
    setSearch(true);

    setTimeout(() => {
      setSearch(false);
    }, 3000);
  }

  // --------------------------------------------------------------------------

  return (
    <SavedMoviesContainer>
      <SearchForm search={search} handleSearch={handleSearch} />
      {search ? (
        <NotFound>Поиск не дал результатов...</NotFound>
      ) : (
        <MoviesCardList movies={savedMovies} />
      )}
    </SavedMoviesContainer>
  );
}

export default SavedMovies;
