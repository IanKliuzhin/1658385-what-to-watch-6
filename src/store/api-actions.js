import {APIRoute} from "../const";
import {setIsLoadingFilms, setFilms, setAuthorizationStatus} from "./action";
import {adaptToClient} from "./adapter";

export const fetchFilms = () => (dispatch, _getState, api) => {
  dispatch(setIsLoadingFilms(true));
  api.get(APIRoute.FILMS)
    .then(({data}) => {
      dispatch(setFilms(data.map(adaptToClient)));
      dispatch(setIsLoadingFilms(false));
    });
};

export const login = ({email, password}) => (dispatch, _getState, api) => {
  api.post(APIRoute.LOGIN, {email, password})
    .then(() => dispatch(setAuthorizationStatus(true)))
    .catch(() => {});
};

export const checkAuth = () => (dispatch, _getState, api) => {
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(setAuthorizationStatus(true)))
    .catch(() => {});
};
