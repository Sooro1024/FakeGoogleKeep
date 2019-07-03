import React, { useState } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { TextField, Typography, Button, Avatar } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { withFirebase } from "react-redux-firebase";
import { SignInAction } from "../actions/authActions";

const SignInComp = ({ signIn, authError, firebase }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleChange(ev, type) {
    return type === "email" ? setEmail(ev) : setPassword(ev);
  }
  function _onSubmit(e) {
    e.preventDefault();
    signIn(
      {
        email,
        password
      },
      firebase
    );
  }

  return (
    <div>
      <Avatar>
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
        <Button type="submit" variant="contained" color="primary">
          Sign In
        </Button>
      </form>
      {authError !== null ? (
        <p style={{ color: "red" }}>{authError.message}</p>
      ) : null}
    </div>
  );
};

const mapStateToProps = state => ({
  authError: state.authReducer.authError,
  auth: state.authReducer.auth
});

const mapDispatchToProps = dispatch => ({
  signIn: (credential, firebase) => dispatch(SignInAction(credential, firebase))
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withFirebase
)(SignInComp);
