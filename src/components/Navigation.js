import React from "react";
import { AppBar, Typography, Toolbar } from "@material-ui/core";
import { Route, Link, Switch } from "react-router-dom";
import { connect } from "react-redux";
import SignInLinks from "./SignInLinks";
import SignOutLinks from "./SignOutLinks";
import Havayi2 from "./Havayi2";
import HOCPrivateRoute from "../conteiners/HOCPrivateRoute";
import Welcome from "./Welcome";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Deskboards from "../conteiners/Deskboards";

const Navigation = ({ auth }) => {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography>
            <Link to="/">Fake Trello</Link>
          </Typography>
          {auth && <SignInLinks />}
          {!auth && <SignOutLinks />}
        </Toolbar>
      </AppBar>
      <div style={{ marginTop: "80px" }}>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/sign_in" component={SignIn} />
          <Route path="/sign_up" component={SignUp} />
          <HOCPrivateRoute path="/home" component={Deskboards} />
          <HOCPrivateRoute path="/new_project" component={Havayi2} />
          <HOCPrivateRoute path="/new_project" component={Havayi2} />
          <HOCPrivateRoute path="/new_project" component={Havayi2} />
        </Switch>
      </div>
    </>
  );
};

const mapDispatchToProps = {
  // push
};
const mapStateToProps = state => ({
  auth: state.authReducer.auth
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
