import React from 'react';
import {useParams} from 'react-router-dom';
import {filmsType} from '../../types';
import ReviewForm from '../review-form/review-form';
import Header from '../header/header';
import {connect} from 'react-redux';

export const AddReview = ({films}) => {
  const {id} = useParams();
  const film = films.find((filmToCheck) => String(filmToCheck.id) === id);
  const {title, bg, poster} = film;

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={bg} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="movie-page.html" className="breadcrumbs__link">{title}</a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
        </Header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={poster} alt={`${title} poster`} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <ReviewForm />
      </div>

    </section>
  );
};

AddReview.propTypes = {
  films: filmsType
};

const mapStateToProps = (state) => ({
  films: state.films,
});

export default connect(mapStateToProps, null)(AddReview);
