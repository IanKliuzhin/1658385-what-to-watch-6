import {APIRoute} from "../const";
import {ActionCreator} from "./action";
import {adaptToClient} from "./adapter";

export const fetchFilms = () => (dispatch, _getState, api) => {
  dispatch(ActionCreator.setIsLoadingFilms(true));
  api.get(APIRoute.FILMS)
    .then(({data}) => {
      dispatch(ActionCreator.setFilms(data.map(adaptToClient)));
      dispatch(ActionCreator.setIsLoadingFilms(false));
    });
};

export const login = (email, password) => (dispatch, _getState, api) => {
  api.post(APIRoute.LOGIN, {email, password})
    .then(() => dispatch(ActionCreator.setAuthorizationStatus(true)))
    .catch(() => {});
};

export const checkAuth = () => (dispatch, _getState, api) => {
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(ActionCreator.setAuthorizationStatus(true)))
    .catch(() => {});
};
