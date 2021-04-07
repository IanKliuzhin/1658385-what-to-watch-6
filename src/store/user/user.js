import {ActionType} from "../action";
import {AuthorizationStatus} from "../../const";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  favoriteIds: [],
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_AUTHORIZATION_STATUS:
      return {
        ...state,
        authorizationStatus: action.payload
      };
    case ActionType.SET_FAVORITES:
      return {
        ...state,
        favoriteIds: action.payload
      };
  }
  return state;
};

export {user};
