import { getFavoredMovies } from "../../utils/MainApi";
import { MovieType } from "../../utils/types";

export async function loadFavoredMovies() {
  const savedMovies = localStorage.getItem("favoredMovies");

  if (savedMovies) {
    try {
      return JSON.parse(savedMovies);
    } catch {
      localStorage.removeItem("favoredMovies");
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
