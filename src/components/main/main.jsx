import React from 'react';
import {useHistory} from 'react-router-dom';
import {filmsType} from '../../types';
import {PROMO_MOVIE_ID} from '../../const';
import MoviesList from '../movies-list/movies-list';
import {getAllGenres, getFilmsByGenre} from '../../helpers';
import GenreFilter from '../genre-filter/genre-filter';
import Header from '../header/header';
import Footer from '../footer/footer';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const Main = ({films, currentGenre}) => {
  const history = useHistory();
  const promoFilm = films.length > 0 ? films.find((film) => film.id === PROMO_MOVIE_ID) : {};
  const {id: promoId, title: promoTitle, genre: promoGenre, year: promoYear} = promoFilm;
  const genres = getAllGenres(films);
  const filteredFilms = getFilmsByGenre(films, currentGenre);

  return (
    <>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={promoFilm.bg} alt={promoFilm.title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header isWithOutLink additionalClass="movie-card__head" />

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={promoFilm.poster} alt={`${promoFilm.title} poster`} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{promoTitle}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{promoGenre}</span>
                <span className="movie-card__year">{promoYear}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button" onClick={() => history.push(`/player/${promoId}`)}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreFilter genres={genres} />

          <MoviesList films={filteredFilms} />

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <Footer isWithOutLink />
      </div>
    </>
  );
};

Main.propTypes = {
  films: filmsType,
  currentGenre: PropTypes.string.isRequired
};

const mapStateToProps = ({CATALOG}) => ({
  films: CATALOG.films,
  currentGenre: CATALOG.currentGenre
});

export default connect(mapStateToProps, null)(Main);
