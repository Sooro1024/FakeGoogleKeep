import React from "react";
import { Grid, TextField } from "@material-ui/core";
import { Lock, Email } from "@material-ui/icons";

const Login = () => {
  return (
    <Grid item xs={6}>
      <Lock />
      <TextField label="Email" />
    </Grid>
  );
};

export default Login;
