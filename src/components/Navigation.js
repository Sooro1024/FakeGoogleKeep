import React from "react";
import { AppBar, Typography, Toolbar, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Route, Link, Switch } from "react-router-dom";
import { connect } from "react-redux";
import SignInLinks from "./SignInLinks";
import SignOutLinks from "./SignOutLinks";
import HOCPrivateRoute from "../conteiners/HOCPrivateRoute";
import Welcome from "./Welcome";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Deskboards from "../conteiners/Deskboards";
import Projects from "../conteiners/Projects";
import Havayi2 from "./Havayi2";

const Navigation = ({ auth }) => {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography>
            {!auth && <Link to="/">Fake Trello</Link>}
            {auth && <Link to="/home">Fake Trello</Link>}
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
          <HOCPrivateRoute exact path="/home" component={Deskboards} />
          <HOCPrivateRoute exact path="/home/:id" component={Projects} />
          <HOCPrivateRoute exact path="/home/:id/:id" component={Havayi2} />
        </Switch>
      </div>
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
