import { MovieMainApiType } from "./types";

// export const BASE_URL = "https://api.eugenes.romey.ru";
export const BASE_URL = "http://localhost:3000"


const jsonHeaders = {
  "Content-Type": "application/json",
};

export async function register({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) {
  const user = await fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify({ name, email, password }),
    credentials: "include",
  });

  return handleResult(user);
}

export async function authorize({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const user = await fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify({ email, password }),
    credentials: "include",
  });

  return handleResult(user);
}

export async function logout() {
  const user = await fetch(`${BASE_URL}/signout`, {
    method: "POST",
    headers: jsonHeaders,
    credentials: "include",
  });

  return handleResult(user);
}

export async function getProfileData() {
  const user = await fetch(`${BASE_URL}/users/me`, {
    credentials: "include",
  });

  return handleResult(user);
}

export async function editProfileData({
  name,
  email,
}: {
  name: string;
  email: string;
}) {
  const user = await fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: jsonHeaders,
    body: JSON.stringify({ name, email }),
    credentials: "include",
  });

  return handleResult(user);
}

export async function getFavoredMovies() {
  const data = await fetch(`${BASE_URL}/movies`, {
    credentials: "include",
  });

  if (!data.ok) {
    throw new Error(`Статуc ошибки: ${data.status}`);
  }

  const movies = await data.json();

  return movies as MovieMainApiType[];
}

export async function postFavoredCards(movie: MovieMainApiType) {
  const data = await fetch(`${BASE_URL}/movies`, {
    method: "POST",
    headers: jsonHeaders,
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

  const mainData = await data.json();

  return mainData;
}
