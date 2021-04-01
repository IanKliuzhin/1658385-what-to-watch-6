import React from 'react';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../store/action';
import {connect} from 'react-redux';

export const GenreFilter = ({genres, currentGenre, changeGenre}) => {
  const baseClass = `catalog__genres-item`;
  const handleClickOnGenre = (genre) => (e) => {
    e.preventDefault();
    e.nativeEvent.preventDefault();
    changeGenre(genre);
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
  changeGenre: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  currentGenre: state.currentGenre
});

const mapDispatchToProps = (dispatch) => ({
  changeGenre(genre) {
    dispatch(ActionCreator.changeGenre(genre));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(GenreFilter);
