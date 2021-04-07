import {ActionType} from "../action";

const initialState = {
  isLoadingFilms: true
};

const appState = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_IS_LOADING_FILMS:
      return {
        ...state,
        isLoadingFilms: action.payload
      };
  }
  return state;
};

export {appState};
