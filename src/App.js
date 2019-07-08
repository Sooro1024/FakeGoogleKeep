import React from "react";
// import Navigation from "./components/Navigation";
import { Grid } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
import NavBar from "./comp/NavBar";
import Wellcome from "./comp/Wellcome";
import Login from "./comp/Login";

const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Grid container>
          <Route exact path="/" component={Login} />
          {/* <Route path="/log_in" component={} />
          <Route path="/sign_up" component={} />
          <HOCPrivateRoute exact path="/home" component={} /> */}
        </Grid>
      </Switch>
    </>
  );
};

export default App;
