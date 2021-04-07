import React from 'react';
import SmallMovieCard from '../small-movie-card/small-movie-card';
import {filmsType} from '../../types';

const MoviesList = ({films}) => {
  return (
    <div className="catalog__movies-list">
      {films.map((film) => <SmallMovieCard film={film} key={film.id} />)}
    </div>
  );
};

MoviesList.propTypes = {
  films: filmsType
};

export default MoviesList;
