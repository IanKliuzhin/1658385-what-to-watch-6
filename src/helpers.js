export const getAllGenres = (films) => {
  const genresWithRepeats = [].concat(...films.map(
      (film) => film.genre.split(`, `))
  );
  return [``, ...new Set(genresWithRepeats)];
};
