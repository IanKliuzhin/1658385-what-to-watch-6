import {AuthorizationStatus} from "../const";

export const ActionType = {
  CHANGE_GENRE: `catalog/changeGenre`,
  SET_FILMS: `catalog/setFilms`,
  SET_IS_LOADING_FILMS: `app/setIsLoadingFilms`,
  SET_AUTHORIZATION_STATUS: `user/setAuth`
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre
  }),
  setFilms: (films) => ({
    type: ActionType.SET_FILMS,
    payload: films
  }),
  setIsLoadingFilms: (isLoading) => ({
    type: ActionType.SET_IS_LOADING_FILMS,
    payload: isLoading
  }),
  setAuthorizationStatus: (isAuthorized) => ({
    type: ActionType.SET_AUTHORIZATION_STATUS,
    payload: isAuthorized ? AuthorizationStatus.AUTH : AuthorizationStatus.NO_AUTH
  })
};
