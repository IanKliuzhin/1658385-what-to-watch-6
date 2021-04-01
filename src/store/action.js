export const ActionType = {
  CHANGE_GENRE: `catalog/changeGenre`,
  SET_FILMS: `catalog/setFilms`
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre
  }),
  setFilms: (films) => ({
    type: ActionType.SET_FILMS,
    payload: films
  })
};
