import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import films from './mocks/films';
import favorites from './mocks/my-films';

ReactDOM.render(
    <App films={films} favoriteIds={favorites} />,
    document.querySelector(`#root`)
);
