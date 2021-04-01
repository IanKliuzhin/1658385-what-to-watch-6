export const getAllGenres = (films) => {
  const genresWithRepeats = [].concat(...films.map(
      (film) => film.genre.split(`, `))
  );
  return [``, ...new Set(genresWithRepeats)];
};

export const getFilmsByGenre = (films, genre) => films.filter(
    (film) => !genre || film.genre.split(`, `).includes(genre));

