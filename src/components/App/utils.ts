import produce from "immer";
import { useEffect, useState } from "react";
import { BaseUrl, KeysTypes } from "../../utils/constants";
import {
  getFavoredMovies,
  postFavoredCards,
  removeFavoredCards,
} from "../../utils/MainApi";
import { getMovies } from "../../utils/MoviesApi";
import { MovieApiType, MovieType, UserType } from "../../utils/types";

export function useWhisMovies(currentUser: UserType | undefined) {
  const [allMovies, setAllMovies] = useState<MovieType[]>();
  const [favoredMovies, setFavoredMovies] = useState<MovieType[]>();

  const [query, setQuery] = useState<{ searchQuery: string; short: boolean }>();
  const [error, setError] = useState(false);

  async function loadMovies() {
    const savedMovies = localStorage.getItem(KeysTypes.movies);

    if (savedMovies) {
      try {
        return JSON.parse(savedMovies);
      } catch {
        localStorage.removeItem(KeysTypes.movies);
      }
    }

    try {
      setError(false);

      const res = await getMovies();

      const apiLoadedMovies = res.map((item: MovieApiType) => {
        return {
          country: item.country,
          director: item.director,
          duration: item.duration,
          year: item.year,
          description: item.description,
          image: `${BaseUrl}${item.image.url}`,
          thumbnail: `${BaseUrl}${item.image.formats.thumbnail.url}`,
          trailerLink: item.trailerLink,
          id: item.id,
          nameRU: item.nameRU,
          nameEN: item.nameEN,
        };
      });

      localStorage.setItem(KeysTypes.movies, JSON.stringify(apiLoadedMovies));

      return apiLoadedMovies;
    } catch (err) {
      setError(true);
      console.log(err);
    }
  }

  async function searchMovies(values: { searchQuery: string; short: boolean }) {
    setQuery(values);

    if (!allMovies) {
      const loadedMovies = await loadMovies();

      setAllMovies(loadedMovies);
    }
  }

  const movies =
    query &&
    allMovies?.filter((movie: MovieType) => {
      if (query.short && movie.duration >= 40) {
        return false;
      }

      return movie.nameRU
        .toLowerCase()
        .includes(query.searchQuery.toLowerCase());
    });

  async function loadFavoredMovies() {
    const savedMovies = localStorage.getItem(KeysTypes.favored);

    if (savedMovies) {
      try {
        return JSON.parse(savedMovies);
      } catch {
        localStorage.removeItem(KeysTypes.favored);
      }
    }

    const res = await getFavoredMovies();

    return res.map((item): MovieType => {
      return {
        country: item.country,
        director: item.director,
        duration: item.duration,
        year: item.year,
        description: item.description,
        image: item.image,
        thumbnail: item.thumbnail,
        trailerLink: item.trailer,
        id: item.movieId,
        nameRU: item.nameRU,
        nameEN: item.nameEN,
      };
    });
  }

  useEffect(() => {
    if (!currentUser) {
      return;
    }

    async function run() {
      try {
        setError(false);

        const loadedMovies = await loadFavoredMovies();

        setFavoredMovies(loadedMovies);
        localStorage.setItem(KeysTypes.favored, JSON.stringify(loadedMovies));
      } catch (err) {
        setError(true);
        console.log(err);
      }
    }

    run();
  }, [currentUser]);

  async function handleSaveMovie(movieId: number) {
    const favoredMovie = favoredMovies?.find(
      (favoredMovie) => favoredMovie.id === movieId
    );

    if (favoredMovie) {
      try {
        await removeFavoredCards(movieId);

        const newState = produce(favoredMovies, (movies) => {
          const onSaveMovie = movies!.find((movie) => movie.id === movieId);
          const onSaveMovieId = movies!.indexOf(onSaveMovie!);

          movies!.splice(onSaveMovieId, 1);
        });

        await setFavoredMovies(newState);

        localStorage.setItem(KeysTypes.favored, JSON.stringify(newState));
      } catch (err) {
        console.log(err);
      }
    } else {
      const movie = movies!.find((movie) => movie.id === movieId)!;

      try {
        await postFavoredCards({
          country: movie.country,
          director: movie.director,
          duration: movie.duration,
          year: movie.year,
          description: movie.description,
          image: movie.image,
          trailer: movie.trailerLink,
          thumbnail: movie.thumbnail,
          movieId: movie.id,
          nameRU: movie.nameRU,
          nameEN: movie.nameEN,
        });

        const newState = produce(favoredMovies, (movies) => {
          movies?.push({
            country: movie.country,
            director: movie.director,
            duration: movie.duration,
            year: movie.year,
            description: movie.description,
            image: movie.image,
            thumbnail: movie.thumbnail,
            trailerLink: movie.trailerLink,
            id: movie.id,
            nameRU: movie.nameRU,
            nameEN: movie.nameEN,
          });
        });

        await setFavoredMovies(newState);

        localStorage.setItem(KeysTypes.favored, JSON.stringify(newState));
      } catch (err) {
        console.log(err);
      }
    }
  }

  return {
    movies,
    favoredMovies,
    error,
    query,
    searchMovies,
    handleSaveMovie,
  };
}
