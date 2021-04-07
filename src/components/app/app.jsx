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
import {useSelector} from 'react-redux';
import LoadingScreen from '../loading-screen/loading-screen';
import PrivateRoute from '../private-route/private-route';

const App = ({favoriteIds}) => {
  const {isLoadingFilms} = useSelector((state) => state.APP_STATE);
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
  favoriteIds: favoriteIdsType
};

export default App;
