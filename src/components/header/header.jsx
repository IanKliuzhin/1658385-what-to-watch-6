import React from 'react';
import UserBlock from '../user-block/user-block';
import PropTypes from 'prop-types';
import Logo from '../logo/logo';

const Header = ({children, additionalClass, isWithOutLink}) => {
  return (
    <header className={`page-header ${additionalClass}`}>
      <Logo isWithOutLink={isWithOutLink} />

      {children}

      <UserBlock />
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.node,
  isWithOutLink: PropTypes.bool,
  additionalClass: PropTypes.oneOf([`movie-card__head`, `user-page__head`])
};

export default Header;
