import React from "react";
import { AppBar, Typography, Toolbar, Container } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import SignInLinks from "../sign/SignInLinks";
import SignOutLinks from "../sign/SignOutLinks";
import HOCPrivateRoute from "../sign/HOCPrivateRoute";
import Welcome from "../Welcome";
import SignIn from "../sign/SignIn";
import SignUp from "../sign/SignUp";
import Deskboards from "../../conteiners/Deskboards";
import ListsContayner from "../../conteiners/ListsContayner";

const Navigation = ({ auth }) => {
  return (
    <>
      <Container maxWidth="lg">
        <AppBar position="fixed">
          <Toolbar>
            <Typography color="inherit" variant="h5">
              Fake Trello
            </Typography>
            {auth && <SignInLinks />}
            {!auth && <SignOutLinks />}
          </Toolbar>
        </AppBar>
        <div style={{ marginTop: "90px" }}>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/sign_in" component={SignIn} />
            <Route path="/sign_up" component={SignUp} />
            <HOCPrivateRoute exact path="/home" component={Deskboards} />
            <HOCPrivateRoute
              exact
              path="/home/:id"
              component={ListsContayner}
            />
          </Switch>
        </div>
      </Container>
    </>
  );
};

const mapStateToProps = state => ({
  auth: state.authReducer.auth
});

export default connect(
  mapStateToProps,
  null
)(Navigation);
