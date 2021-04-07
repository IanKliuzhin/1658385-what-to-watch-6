import PropTypes from "prop-types";
import React from "react";
import {useSelector} from 'react-redux';
import {AuthorizationStatus, APIRoute} from "../../const";
import {Route, Redirect} from "react-router-dom";

const PrivateRoute = ({path, render, exact}) => {
  const {authorizationStatus} = useSelector((state) => state.USER);
  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) =>
        authorizationStatus === AuthorizationStatus.AUTH ? (
          render(routeProps)
        ) : (
          <Redirect to={APIRoute.LOGIN} />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
  exact: PropTypes.bool.isRequired,
};

export default PrivateRoute;
