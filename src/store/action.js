import {AuthorizationStatus} from "../const";

export const ActionType = {
  CHANGE_GENRE: `catalog/changeGenre`,
  SET_FILMS: `catalog/setFilms`,
  SET_IS_LOADING_FILMS: `app/setIsLoadingFilms`,
  SET_AUTHORIZATION_STATUS: `user/setAuth`
};

export const changeGenre = (genre) => ({
  type: ActionType.CHANGE_GENRE,
  payload: genre
});

export const setFilms = (films) => ({
  type: ActionType.SET_FILMS,
  payload: films
});

export const setIsLoadingFilms = (isLoading) => ({
  type: ActionType.SET_IS_LOADING_FILMS,
  payload: isLoading
});

export const setAuthorizationStatus = (isAuthorized) => ({
  type: ActionType.SET_AUTHORIZATION_STATUS,
  payload: isAuthorized ? AuthorizationStatus.AUTH : AuthorizationStatus.NO_AUTH
});

