import React, {Fragment, useState} from 'react';
import {MAX_RATE} from '../../const';

const ReviewForm = () => {
  const [rate, setRate] = useState(`1`);
  const [text, setText] = useState(``);
  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {new Array(MAX_RATE).fill().map((_, index) =>
            <Fragment key={`rate-${index + 1}`}>
              <input className="rating__input" id={`star-${index + 1}`} type="radio" name="rating" value={`${index + 1}`} checked={rate === `${index + 1}`} onChange={(e) => setRate(e.target.value)}/>
              <label className="rating__label" htmlFor={`star-${index + 1}`}>Rating {index + 1}</label>
            </Fragment>)}
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" value={text} onChange={(e) => setText(e.target.value)}></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>
  );
};

export default ReviewForm;
