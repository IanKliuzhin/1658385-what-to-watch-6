import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import favorites from './mocks/my-films';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {reducer} from './store/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createAPI} from './services/api';
import thunk from 'redux-thunk';
import {fetchFilms, checkAuth} from './store/api-actions';
import {ActionCreator} from './store/action';


const api = createAPI(
    () => store.dispatch(ActionCreator.setAuthorizationStatus(false))
);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)
        )
    ));

store.dispatch(fetchFilms());
store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App favoriteIds={favorites} />
    </Provider>,
    document.querySelector(`#root`)
);
