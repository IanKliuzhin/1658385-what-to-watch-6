import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import films from './mocks/films';

const PROMO_MOVIE_ID = `gb`;

ReactDOM.render(
    <App promoMovieId={PROMO_MOVIE_ID} films={films} />,
    document.querySelector(`#root`)
);
