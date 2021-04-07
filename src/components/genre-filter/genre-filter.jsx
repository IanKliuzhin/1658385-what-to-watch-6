import React from 'react';
import PropTypes from 'prop-types';
import {changeGenre} from '../../store/action';
import {useSelector, useDispatch} from 'react-redux';

const BASE_CLASS = `catalog__genres-item`;

export const GenreFilter = ({genres}) => {
  const {currentGenre} = useSelector((state) => state.CATALOG);
  const dispatch = useDispatch();
  const handleClickOnGenre = (genre) => (e) => {
    e.preventDefault();
    e.nativeEvent.preventDefault();
    dispatch(changeGenre(genre));
  };
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li key={genre} className={`${BASE_CLASS} ${genre === currentGenre && `${BASE_CLASS}--active`}`}>
          <a onClick={handleClickOnGenre(genre)} href="#" className="catalog__genres-link">{genre || `All genres`}</a>
        </li>
      ))}
    </ul>
  );
};

GenreFilter.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default GenreFilter;
