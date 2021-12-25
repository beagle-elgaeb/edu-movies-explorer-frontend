export type MovieType = {
  country: string;
  director: string;
  duration: number;
  year: string;
  description: string;
  image: string;
  thumbnail: string;
  trailerLink: string;
  id: number;
  nameRU: string;
  nameEN: string;
};

export type MovieApiType = {
  country: string;
  director: string;
  duration: number;
  year: string;
  description: string;
  image: { url: string; formats: { thumbnail: { url: string } } };
  trailerLink: string;
  id: number;
  nameRU: string;
  nameEN: string;
};

export type MovieMainApiType = {
  country: string;
  director: string;
  duration: number;
  year: string;
  description: string;
  image: string;
  trailer: string;
  thumbnail: string;
  movieId: number;
  nameRU: string;
  nameEN: string;
};

export type LinkType = {
  to: string;
  text: string;
};

export type UserType = {
  email: string;
  name: string;
  _id: string;
};
