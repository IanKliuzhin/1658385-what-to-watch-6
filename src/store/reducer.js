import {ActionType} from "./action";
import {AuthorizationStatus} from "../const";

const initialState = {
  currentGenre: ``,
  films: [],
  isLoadingFilms: true,
  authorizationStatus: AuthorizationStatus.NO_AUTH
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        currentGenre: action.payload
      };
    case ActionType.SET_FILMS:
      return {
        ...state,
        films: action.payload
      };
    case ActionType.SET_IS_LOADING_FILMS:
      return {
        ...state,
        isLoadingFilms: action.payload
      };
    case ActionType.SET_AUTHORIZATION_STATUS:
      return {
        ...state,
        authorizationStatus: action.payload
      };
    default:
      return state;
  }
};

export {reducer};
