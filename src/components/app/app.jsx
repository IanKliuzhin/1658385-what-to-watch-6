import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import MovieCard from '../movie-card/movie-card';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import PageNotFound from '../page-not-found/page-not-found';
import {favoriteIdsType} from '../../types';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import LoadingScreen from '../loading-screen/loading-screen';
import PrivateRoute from '../private-route/private-route';

const App = ({favoriteIds, isLoadingFilms}) => {
  return <BrowserRouter>
    {isLoadingFilms ? <LoadingScreen /> :
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <PrivateRoute
          exact
          path="/mylist"
          render={() => <MyList favoriteIds={favoriteIds} />}
        />
        <PrivateRoute
          exact
          path="/films/:id/review"
          render={() => <AddReview />}
        />
        <Route exact path="/films/:id">
          <MovieCard />
        </Route>
        <Route exact path="/player/:id">
          <Player />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    }
  </BrowserRouter>;
};

App.propTypes = {
  favoriteIds: favoriteIdsType,
  isLoadingFilms: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  isLoadingFilms: state.isLoadingFilms
});

export default connect(mapStateToProps, null)(App);
