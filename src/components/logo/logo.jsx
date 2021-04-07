import React from 'react';
import {useHistory} from 'react-router-dom';
import PropTypes from 'prop-types';

const Logo = ({isWithOutLink, isLight}) => {
  const history = useHistory();
  const clickHandler = (evt) => {
    evt.preventDefault();

    history.push(`/`);
  };

  return (
    <div className="logo">
      <a href={isWithOutLink ? null : `/`} className={`logo__link ${isLight ? `logo__link--light` : ``}`} onClick={clickHandler}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </a>
    </div>
  );
};

Logo.propTypes = {
  isWithOutLink: PropTypes.bool,
  isLight: PropTypes.bool
};

export default Logo;
