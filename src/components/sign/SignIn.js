import React, { useState } from "react";
import { connect } from "react-redux";
import { TextField, Typography, Button, Avatar, Grid } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { SignInAction } from "../../actions/authActions";

const SignInComp = ({ signIn, authError }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonCondition, setbuttonCondition] = useState(false);
  function handleChange(ev, type) {
    return type === "email"
      ? (setEmail(ev), setbuttonCondition(false))
      : (setPassword(ev), setbuttonCondition(false));
  }
  function _onSubmit(e) {
    e.preventDefault();
    setbuttonCondition(true);
    signIn({
      email,
      password
    });
  }

  return (
    <Grid container direction="column" justify="flex-start" alignItems="center">
      <Grid item lg={4}>
        <Avatar style={{ margin: "auto" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form onSubmit={_onSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={({ target: { value } }) => {
              handleChange(value, "email");
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={({ target: { value } }) => {
              handleChange(value, "password");
            }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={buttonCondition}
          >
            Sign In
          </Button>
        </form>
        {authError !== null ? (
          <p style={{ color: "red" }}>{authError.message}</p>
        ) : null}
      </Grid>
    </Grid>
  );
};

const mapStateToProps = state => ({
  authError: state.authReducer.authError,
  auth: state.authReducer.auth
});

const mapDispatchToProps = dispatch => ({
  signIn: credential => dispatch(SignInAction(credential))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInComp);
