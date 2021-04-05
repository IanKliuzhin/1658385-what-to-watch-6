import {ActionType} from "./action";

const initialState = {
  currentGenre: ``,
  films: [],
  isLoadingFilms: true
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
    default:
      return state;
  }
};

export {reducer};
