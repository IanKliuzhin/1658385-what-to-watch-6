import React from 'react';
import PropTypes from 'prop-types';

const MovieOverview = ({rating, description, director, starring}) => {
  const {rate, level, amount} = rating;
  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{rate.toString().replace(`.`, `,`)}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{level}</span>
          <span className="movie-rating__count">{amount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        {description}

        <p className="movie-card__director"><strong>Director: {director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {starring.slice(0, 3).join(`, `)} and other</strong></p>
      </div>
    </>
  );
};

MovieOverview.propTypes = {
  rating: PropTypes.shape({
    rate: PropTypes.number.isRequired,
    level: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  }).isRequired,
  description: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MovieOverview;
