import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const PROMO_MOVIE_INFO = {
  title: `The Grand Budapest Hotel`,
  meta: {
    genre: `Drama`,
    year: 2014
  }
};

ReactDOM.render(
    <App promoMovieInfo={PROMO_MOVIE_INFO} />,
    document.querySelector(`#root`)
);
