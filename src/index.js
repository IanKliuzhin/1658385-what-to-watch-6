import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './store/root-reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createAPI} from './services/api';
import thunk from 'redux-thunk';
import {fetchFilms, checkAuth, fetchPromoId, fetchFavorites} from './store/api-actions';
import {setAuthorizationStatus} from './store/action';


const api = createAPI(
    () => store.dispatch(setAuthorizationStatus(false))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)
        )
    ));

store.dispatch(fetchFilms());
store.dispatch(checkAuth());
store.dispatch(fetchPromoId());
store.dispatch(fetchFavorites());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
