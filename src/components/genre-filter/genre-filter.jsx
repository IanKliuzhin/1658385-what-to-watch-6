import React from 'react';
import PropTypes from 'prop-types';
import {changeGenre} from '../../store/action';
import {connect} from 'react-redux';

export const GenreFilter = ({genres, currentGenre, onChangeGenre}) => {
  const baseClass = `catalog__genres-item`;
  const handleClickOnGenre = (genre) => (e) => {
    e.preventDefault();
    e.nativeEvent.preventDefault();
    onChangeGenre(genre);
  };
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li key={genre} className={`${baseClass} ${genre === currentGenre && `${baseClass}--active`}`}>
          <a onClick={handleClickOnGenre(genre)} href="#" className="catalog__genres-link">{genre || `All genres`}</a>
        </li>
      ))}
    </ul>
  );
};

GenreFilter.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentGenre: PropTypes.string.isRequired,
  onChangeGenre: PropTypes.func.isRequired
};

const mapStateToProps = ({CATALOG}) => ({
  currentGenre: CATALOG.currentGenre
});

const mapDispatchToProps = (dispatch) => ({
  onChangeGenre(genre) {
    dispatch(changeGenre(genre));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(GenreFilter);
