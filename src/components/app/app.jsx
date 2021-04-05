import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import MovieCard from '../movie-card/movie-card';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import PageNotFound from '../page-not-found/page-not-found';
import {filmsType, favoriteIdsType} from '../../types';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import LoadingScreen from '../loading-screen/loading-screen';

const App = ({films, favoriteIds, isLoadingFilms}) => {
  const favorites = favoriteIds.map((id) => films.find((film) => film.id === id));
  return <BrowserRouter>
    <Switch>
      <Route exact path="/">
        {isLoadingFilms ? <LoadingScreen /> : <Main films={films} />}
      </Route>
      <Route exact path="/login">
        <SignIn />
      </Route>
      <Route exact path="/mylist">
        {isLoadingFilms ? <LoadingScreen /> : <MyList films={favorites} />}
      </Route>
      <Route exact path="/films/:id/review">
        {isLoadingFilms ? <LoadingScreen /> : <AddReview films={films} />}
      </Route>
      <Route exact path="/films/:id">
        {isLoadingFilms ? <LoadingScreen /> : <MovieCard films={films} />}
      </Route>
      <Route exact path="/player/:id">
        {isLoadingFilms ? <LoadingScreen /> : <Player films={films} />}
      </Route>
      <Route>
        <PageNotFound />
      </Route>
    </Switch>
  </BrowserRouter>;
};

App.propTypes = {
  films: filmsType,
  favoriteIds: favoriteIdsType,
  isLoadingFilms: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  films: state.films,
  isLoadingFilms: state.isLoadingFilms
});

export default connect(mapStateToProps, null)(App);
