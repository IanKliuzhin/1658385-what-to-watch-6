import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../logo/logo';

const Footer = ({isWithOutLink}) => {
  return (
    <footer className="page-footer">
      <Logo isWithOutLink={isWithOutLink} isLight />

      <div className="copyright">
        <p>© 2019-2021 What to watch Ltd.</p>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  isWithOutLink: PropTypes.bool
};

export default Footer;
