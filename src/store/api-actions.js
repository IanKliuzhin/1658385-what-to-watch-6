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
