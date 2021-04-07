import {APIRoute} from "../const";
import {setIsLoadingFilms, setFilms, setAuthorizationStatus, setIsPostingComment} from "./action";
import {adaptToClient} from "./adapter";
import {NameSpace} from "./root-reducer";

export const fetchFilms = () => (dispatch, _getState, api) => {
  dispatch(setIsLoadingFilms(true));
  api.get(APIRoute.FILMS)
    .then(({data}) => {
      dispatch(setFilms(data.map(adaptToClient)));
      dispatch(setIsLoadingFilms(false));
    });
};

export const fetchFilm = (id) => (dispatch, _getState, api) => {
  dispatch(setIsLoadingFilms(true));
  api.get(`${APIRoute.FILMS}/${id}`)
    .then(({data}) => {
      dispatch(setFilms(
          [
            adaptToClient(data),
          ]
      ));
      dispatch(setIsLoadingFilms(false));
    });
};

export const fetchComments = (filmId) => (_dispatch, getState, api) => {
  api.get(`${APIRoute.COMENTS}/${filmId}`)
    .then(({data}) => {
      const {films} = getState()[NameSpace.CATALOG];
      const filmToAddComments = films.find((film) => String(film.id) === String(filmId));
      filmToAddComments.comments = data;
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

export const postComment = (filmId, rating, comment) => (dispatch, getState, api) => {
  dispatch(setIsPostingComment(true));
  api.post(`${APIRoute.COMENTS}/${filmId}`, {rating, comment})
    .then(({data}) => {
      dispatch(setIsPostingComment(false));
      const {films} = getState()[NameSpace.CATALOG];
      const filmToAddComments = films.find((film) => String(film.id) === String(filmId));
      filmToAddComments.comments = data;
    })
    .catch(() => {});
};
