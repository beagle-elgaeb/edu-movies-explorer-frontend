import { MovieMainApiType } from "./types";

export const BASE_URL = "http://localhost:3000";

export async function getFavoredMovies() {
  const data = await fetch(`${BASE_URL}/movies`);

  if (!data.ok) {
    throw new Error(`Статуc ошибки: ${data.status}`);
  }

  const movies = await data.json();

  return movies as MovieMainApiType[];
}

export async function postFavoredCards(movie: MovieMainApiType) {
  const data = await fetch(`${BASE_URL}/movies`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(movie),
  });

  handleResult(data);
}

export async function removeFavoredCards(id: number) {
  const data = await fetch(`${BASE_URL}/movies/${id}`, {
    method: "DELETE",
    credentials: "include",
  });

  handleResult(data);
}

async function handleResult(data: Response) {
  if (!data.ok) {
    throw new Error(`Статуc ошибки: ${data.status}`);
  }

  const main = await data.json();

  return main;
}
