import React from 'react';
import PropTypes from 'prop-types';

export const GenreFilter = ({genres}) => {
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li key={genre} className="catalog__genres-item">
          <a href="#" className="catalog__genres-link">{genre || `All genres`}</a>
        </li>
      ))}
    </ul>
  );
};

GenreFilter.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string)
};
