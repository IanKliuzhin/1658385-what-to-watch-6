import React from 'react';
import {filmType} from '../../types';

const SmallMovieCard = ({film}) => {
  const {title, bg} = film;
  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={`img/${bg}.jpg`} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{title}</a>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  film: filmType
};

export default SmallMovieCard;
