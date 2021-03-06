import React, {useState, useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import MoviesList from '../movies-list/movies-list';
import Header from '../header/header';
import Footer from '../footer/footer';
import {useSelector, useDispatch} from 'react-redux';
import {TabName, AuthorizationStatus} from '../../const';
import Tabs from '../tabs/tabs';
import MovieOverview from '../movie-overview/movie-overview';
import MovieDetails from '../movie-details/movie-details';
import MovieReviews from '../movie-reviews/movie-reviews';
import {fetchComments, toggleFavorite} from '../../store/api-actions';
import {getRelatedFilms} from '../../helpers';
import PageNotFound from '../page-not-found/page-not-found';

export const MovieCard = () => {
  const {films} = useSelector((state) => state.CATALOG);
  const {authorizationStatus} = useSelector((state) => state.USER);
  const dispatch = useDispatch();
  const history = useHistory();
  let {id} = useParams();
  id = parseInt(id, 10);
  const film = films.length ? films.find((filmToCheck) => filmToCheck.id === id) : {};
  if (!film) {
    return <PageNotFound />;
  }
  const {title, bg, genre, released, poster, rating, description, director, starring, runTime, comments, isFavorite} = film;

  useEffect(() => {
    if (!comments) {
      dispatch(fetchComments(id));
    }
  }, [comments, id]);

  const relatedFilms = getRelatedFilms(films.filter((filmToCheck) => filmToCheck.id !== id), genre);
  const [activeTabName, setActiveTabName] = useState(TabName.OVERVIEW);
  const onAddReviewClick = (evt) => {
    evt.preventDefault();

    history.push(`/films/${id}/review`);
  };

  const handleFavoriteClick = (evt) => {
    evt.preventDefault();

    dispatch(toggleFavorite(id, !isFavorite));
  };

  const getInfoComponent = () => {
    switch (activeTabName) {
      case TabName.OVERVIEW:
        return <MovieOverview rating={rating} description={description} director={director} starring={starring} />;
      case TabName.DETAILS:
        return <MovieDetails director={director} starring={starring} runTime={runTime} genre={genre} released={released} />;
      case TabName.REVIEWS:
        return <MovieReviews comments={comments}/>;
      default:
        return null;
    }
  };

  return (
    <>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={bg} alt={title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header additionalClass="movie-card__head" />

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{released}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button" onClick={() => history.push(`/player/${id}`)}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button" onClick={handleFavoriteClick}>
                  <svg viewBox="0 0 18 14" width="18" height="14">
                    <use xlinkHref={isFavorite ? `#in-list` : `#add`}></use>
                  </svg>
                  <span>My list</span>
                </button>
                {authorizationStatus === AuthorizationStatus.AUTH && <a href={`/films/${id}/review`} className="btn movie-card__button" onClick={onAddReviewClick}>Add review</a>}
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={poster} alt={`${title} poster`} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <Tabs activeTabName={activeTabName} setActiveTabName={setActiveTabName} />

              {getInfoComponent()}
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          {relatedFilms.length > 0 &&
            <h2 className="catalog__title">More like this</h2>
          }

          <div className="catalog__movies-list">
            <MoviesList films={relatedFilms} />
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default MovieCard;
