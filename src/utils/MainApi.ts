import { BaseUrlMainApi } from "./constants";
import { MovieMainApiType } from "./types";

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
  const user = await fetch(`${BaseUrlMainApi}/signup`, {
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
  const user = await fetch(`${BaseUrlMainApi}/signin`, {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify({ email, password }),
    credentials: "include",
  });

  return handleResult(user);
}

export async function logout() {
  const user = await fetch(`${BaseUrlMainApi}/signout`, {
    method: "POST",
    headers: jsonHeaders,
    credentials: "include",
  });

  return handleResult(user);
}

export async function getProfileData() {
  const user = await fetch(`${BaseUrlMainApi}/users/me`, {
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
  const user = await fetch(`${BaseUrlMainApi}/users/me`, {
    method: "PATCH",
    headers: jsonHeaders,
    body: JSON.stringify({ name, email }),
    credentials: "include",
  });

  return handleResult(user);
}

export async function getFavoredMovies() {
  const data = await fetch(`${BaseUrlMainApi}/movies`, {
    credentials: "include",
  });

  if (!data.ok) {
    throw new Error(`Статуc ошибки: ${data.status}`);
  }

  const movies = await data.json();

  return movies as MovieMainApiType[];
}

export async function postFavoredCards(movie: MovieMainApiType) {
  const data = await fetch(`${BaseUrlMainApi}/movies`, {
    method: "POST",
    headers: jsonHeaders,
    credentials: "include",
    body: JSON.stringify(movie),
  });

  handleResult(data);
}

export async function removeFavoredCards(id: number) {
  const data = await fetch(`${BaseUrlMainApi}/movies/${id}`, {
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
