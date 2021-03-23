import React from 'react';
import {filmType} from '../../types';
import {useHistory} from 'react-router-dom';

const SmallMovieCard = ({film}) => {
  const {id, title, bg} = film;
  const history = useHistory();
  return (
    <article className="small-movie-card catalog__movies-card" onClick={() => history.push(`/films/${id}`)}>
      <div className="small-movie-card__image">
        <img src={`img/${bg}.jpg`} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href={`/films/${id}`}>{title}</a>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  film: filmType
};

export default SmallMovieCard;
