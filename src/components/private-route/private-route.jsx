import PropTypes from "prop-types";
import React from "react";
import {connect} from "react-redux";
import {AuthorizationStatus, APIRoute} from "../../const";
import {Route, Redirect} from "react-router-dom";

const PrivateRoute = ({path, render, exact, authorizationStatus}) => {
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
  authorizationStatus: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
  exact: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});

export default connect(mapStateToProps, null)(PrivateRoute);
