import React, {useState} from 'react';
import SmallMovieCard from '../small-movie-card/small-movie-card';
import {filmsType} from '../../types';

const MoviesList = ({films}) => {
  const [activeFilmId, setActiveFilmId] = useState(``);
  return (
    <div className="catalog__movies-list">
      {films.map((film) => <SmallMovieCard film={film} key={film.id} setActive={() => setActiveFilmId(film.id)} activeFilmId={activeFilmId} />)}
    </div>
  );
};

MoviesList.propTypes = {
  films: filmsType
};

export default MoviesList;
