import React from 'react';
import Main from '../main/main';
import PropTypes from 'prop-types';

const App = (props) => {
  return <Main promoMovieInfo={props.promoMovieInfo} />;
};

App.propTypes = {
  promoMovieInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    meta: PropTypes.shape({
      genre: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired
    })
  })
};
export default App;
