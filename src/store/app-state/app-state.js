import {ActionType} from "../action";

const initialState = {
  isLoadingFilms: true,
  isPostingComment: false
};

const appState = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_IS_LOADING_FILMS:
      return {
        ...state,
        isLoadingFilms: action.payload
      };
    case ActionType.SET_IS_POSTING_COMMENT:
      return {
        ...state,
        isPostingComment: action.payload
      };
  }
  return state;
};

export {appState};
