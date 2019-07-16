import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

function HOCPrivateRoute({ component: Component, auth, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        auth ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/sign_in",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

const mapStateToProps = state => ({
  auth: state.authReducer.auth
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HOCPrivateRoute);
