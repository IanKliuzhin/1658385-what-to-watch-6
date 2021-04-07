import {ActionType} from "../action";

const initialState = {
  currentGenre: ``,
  films: []
};

const catalog = (state = initialState, action) => {
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
  }
  return state;
};

export {catalog};
