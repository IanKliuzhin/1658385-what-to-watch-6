import React from 'react';
import {TabName} from '../../const';
import PropTypes from "prop-types";

const Tabs = ({activeTabName, setActiveTabName}) => {
  const handleSelectTab = (tabName) => (evt) => {
    evt.preventDefault();

    setActiveTabName(tabName);
  };

  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {Object.values(TabName).map((tabName) => (
          <li key={tabName} className={`movie-nav__item ${activeTabName === tabName ? `movie-nav__item--active` : ``}`}>
            <a href="#" className="movie-nav__link" onClick={handleSelectTab(tabName)}>{tabName}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Tabs.propTypes = {
  activeTabName: PropTypes.oneOf(Object.values(TabName)).isRequired,
  setActiveTabName: PropTypes.func.isRequired
};

export default Tabs;
