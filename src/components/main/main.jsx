import React from 'react';
import {useHistory} from 'react-router-dom';
import {filmsType} from '../../types';
import {PROMO_MOVIE_ID, AuthorizationStatus} from '../../const';
import MoviesList from '../movies-list/movies-list';
import {getAllGenres, getFilmsByGenre} from '../../helpers';
import GenreFilter from '../genre-filter/genre-filter';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const Main = ({films, currentGenre, authorizationStatus}) => {
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

        <header className="page-header movie-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="user-block">
            {authorizationStatus === AuthorizationStatus.AUTH ?
              <div className="user-block__avatar" onClick={() => history.push(`/mylist`)}>
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
              :
              <a href={`/login`} className="user-block__link">Sign in</a>
            }
          </div>
        </header>

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

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

Main.propTypes = {
  films: filmsType,
  currentGenre: PropTypes.string.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  currentGenre: state.currentGenre,
  authorizationStatus: state.authorizationStatus,
});

export default connect(mapStateToProps, null)(Main);
