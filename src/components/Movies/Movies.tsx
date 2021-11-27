import { useState } from "react";
import { movies } from "../../utils/lists";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import { MoviesContainer, More } from "./Movies.style";

function Movies() {
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
    <MoviesContainer>
      <SearchForm search={search} handleSearch={handleSearch} />
      {search ? (
        <></>
      ) : (
        <>
          <MoviesCardList movies={movies} />
          <More>Ещё</More>
        </>
      )}
    </MoviesContainer>
  );
}

export default Movies;
