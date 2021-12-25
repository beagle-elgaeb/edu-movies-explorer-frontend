export enum CategoryTypes {
  movies = "movies",
  favored = "favoredMovies",
}

export enum KeysTypes {
  profile = "profile",
  favored = "favoredMovies",
  favoredSearch = "favoredMoviesSearchResult",
  movies = "movies",
  moviesSearch = "moviesSearchResult",
}

export enum Timer {
  preloader = 800,
  success = 2000,
}

export enum StartLineCount {
  phone = 5,
  pad = 4,
  normalAndMore = 3,
}

export enum InLineCount {
  phone = 1,
  pad = 2,
  normal = 3,
  wide = 4,
}

export enum IncrementLineCount {
  phone = 2,
  padAndMore = 1,
}

export const durationShortFilm = 40;

export const BaseUrl = "https://api.nomoreparties.co";
export const BaseUrlBeatfilmApi = "https://api.nomoreparties.co/beatfilm-movies";
export const BaseUrlMainApi = "https://api.eugenes.romey.ru";