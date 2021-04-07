import React, {Fragment, useState, useRef, useEffect} from 'react';
import {MAX_RATE, MIN_REVIEW_TEXT_LENGTH, MAX_REVIEW_TEXT_LENGTH, DEFAULT_REVIEW_RATING} from '../../const';
import {useSelector, useDispatch} from 'react-redux';
import {postComment} from '../../store/api-actions';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';

const ReviewForm = ({id}) => {
  const [rating, setRating] = useState(`${DEFAULT_REVIEW_RATING}`);
  const [comment, setComment] = useState(``);
  const {isPostingComment} = useSelector((state) => state.APP_STATE);
  const prevIsPostingRef = useRef(isPostingComment);
  const history = useHistory();
  const dispatch = useDispatch();
  const onSubmit = (evt) => {
    evt.preventDefault();

    dispatch(postComment(id, Number(rating), comment));
  };

  useEffect(() => {
    if (prevIsPostingRef.current === true && isPostingComment === false) {
      history.push(`/films/${id}`);
    }
    prevIsPostingRef.current = isPostingComment;
  }, [isPostingComment]);

  return (
    <form action="#" className="add-review__form" onSubmit={onSubmit}>
      <div className="rating">
        <div className="rating__stars">
          {new Array(MAX_RATE).fill().map((_, index) =>
            <Fragment key={`rate-${index + 1}`}>
              <input className="rating__input" id={`star-${index + 1}`} type="radio" name="rating" value={`${index + 1}`} checked={rating === `${index + 1}`} onChange={(e) => setRating(e.target.value)}/>
              <label className="rating__label" htmlFor={`star-${index + 1}`}>Rating {index + 1}</label>
            </Fragment>)}
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" value={comment} onChange={(e) => setComment(e.target.value)} maxLength={MAX_REVIEW_TEXT_LENGTH}></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit" disabled={isPostingComment || comment.length < MIN_REVIEW_TEXT_LENGTH}>Post</button>
        </div>

      </div>
    </form>
  );
};

ReviewForm.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ReviewForm;
