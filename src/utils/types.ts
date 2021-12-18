export type MovieType = {
  id: number;
  nameRU: string;
  duration: number;
  trailerLink: string;
  image: string;
};

export type MovieApiType = {
  id: number;
  nameRU: string;
  duration: number;
  trailerLink: string;
  image: { url: string };
};

export type MovieMainApiType = {
  movieId: number;
  nameRU: string;
  duration: number;
  trailer: string;
  image: string;
};

export type LinkType = {
  to: string;
  text: string;
};
