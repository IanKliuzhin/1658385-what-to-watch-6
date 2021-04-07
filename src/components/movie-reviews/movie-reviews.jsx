import React from 'react';
import {commentType} from '../../types';
import PropTypes from 'prop-types';
import LoadingScreen from '../loading-screen/loading-screen';

const DATE_LOCALE = `en-US`;
const DATE_OPTIONS = {
  year: `numeric`,
  month: `long`,
  day: `numeric`
};

const MovieReviews = ({comments}) => {
  if (typeof comments === `undefined`) {
    return <LoadingScreen />;
  }
  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {comments.map((comment) => (
          <div key={comment.id} className="review">
            <blockquote className="review__quote">
              <p className="review__text">{comment.comment}</p>

              <footer className="review__details">
                <cite className="review__author">{comment.user.name}</cite>
                <time className="review__date" dateTime="2016-12-24">{new Date(comment.date).toLocaleDateString(DATE_LOCALE, DATE_OPTIONS)}</time>
              </footer>
            </blockquote>

            <div className="review__rating">{comment.rating.toString().replace(`.`, `,`)}</div>
          </div>

        ))}
      </div>
    </div>
  );
};

MovieReviews.propTypes = {
  comments: PropTypes.arrayOf(commentType)
};

export default MovieReviews;
