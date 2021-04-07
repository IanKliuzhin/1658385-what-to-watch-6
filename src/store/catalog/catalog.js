import {ActionType} from "../action";

const initialState = {
  currentGenre: ``,
  films: [],
  promoFilmId: 0
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
    case ActionType.SET_PROMO:
      return {
        ...state,
        promoFilmId: action.payload
      };
  }
  return state;
};

export {catalog};
