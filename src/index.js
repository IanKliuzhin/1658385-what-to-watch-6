import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import favorites from './mocks/my-films';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {reducer} from './store/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
    <Provider store={store}>
      <App favoriteIds={favorites} />
    </Provider>,
    document.querySelector(`#root`)
);
