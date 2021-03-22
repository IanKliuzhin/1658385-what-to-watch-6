import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import MovieCard from '../movie-card/movie-card';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import PageNotFound from '../page-not-found/page-not-found';
import {filmsType} from '../../types';

const App = ({promoMovieId, films}) => {
  return <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Main promoMovieId={promoMovieId} films={films} />
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
      <Route>
        <PageNotFound />
      </Route>
    </Switch>
  </BrowserRouter>;
};

App.propTypes = {
  promoMovieId: PropTypes.string.isRequired,
  films: filmsType
};
export default App;
