import { MovieApiType } from "./types";

export const BASE_URL = "https://api.nomoreparties.co/beatfilm-movies";

export async function getMovies() {
  const data = await fetch(`${BASE_URL}/`);

  if (!data.ok) {
    throw new Error(`Статуc ошибки: ${data.status}`);
  }

  const movies = await data.json();

  return movies as MovieApiType[];
}
