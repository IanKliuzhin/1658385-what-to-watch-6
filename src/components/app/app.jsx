import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import MovieCard from '../movie-card/movie-card';
import AddReview from '../add-review/add-review';
import Player from '../player/player';

const App = (props) => {
  return <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Main promoMovieInfo={props.promoMovieInfo} />
      </Route>
      <Route exact path="/login">
        <SignIn />
      </Route>
      <Route exact path="/mylist">
        <MyList />
      </Route>
      <Route exact path="/films/:id/review">
        <AddReview />
      </Route>
      <Route exact path="/films/:id">
        <MovieCard />
      </Route>
      <Route exact path="/player/:id">
        <Player />
      </Route>
    </Switch>
  </BrowserRouter>;
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
