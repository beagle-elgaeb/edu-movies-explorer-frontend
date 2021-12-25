import { BaseUrlBeatfilmApi } from "./constants";
import { MovieApiType } from "./types";

export async function getMovies() {
  const data = await fetch(`${BaseUrlBeatfilmApi}/`);

  if (!data.ok) {
    throw new Error(`Статуc ошибки: ${data.status}`);
  }

  const movies = await data.json();

  return movies as MovieApiType[];
}
