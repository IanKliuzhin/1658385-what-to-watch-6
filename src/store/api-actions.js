import {APIRoute} from "../const";
import {setIsLoadingFilms, setFilms, setFavoriteIds, setAuthorizationStatus, setIsPostingComment, setPromoFilmId} from "./action";
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

export const fetchPromoId = () => (dispatch, _getState, api) => {
  api.get(APIRoute.PROMO)
    .then(({data}) => {
      dispatch(setPromoFilmId(data.id));
    });
};

export const fetchFavorites = () => (dispatch, _getState, api) => {
  api.get(APIRoute.FAVORITE)
    .then(({data}) => {
      dispatch(setFavoriteIds(data.map((film) => film.id)));
    });
};

export const toggleFavorite = (id, isFavorite) => (dispatch, getState, api) => {
  api.post(`${APIRoute.FAVORITE}/${id}/${isFavorite ? 1 : 0}`)
    .then(({data}) => {
      const {favoriteIds} = getState()[NameSpace.USER];
      const newFavoriteIds = isFavorite ? favoriteIds.slice().concat(id) : favoriteIds.slice().filter((idToCheck) => idToCheck !== id);

      const {films} = getState()[NameSpace.CATALOG];
      const filmIndex = films.findIndex((filmToCheck) => filmToCheck.id === id);
      const newFilms = [
        ...films.slice(0, filmIndex),
        adaptToClient(data),
        ...films.slice(filmIndex + 1),
      ];

      dispatch(setFilms(newFilms));
      dispatch(setFavoriteIds(newFavoriteIds));
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
