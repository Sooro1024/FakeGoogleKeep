import React, { useState } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { TextField, Typography, Button } from "@material-ui/core";
import { withFirebase, withFirestore } from "react-redux-firebase";
import { SignUpAction } from "../actions/authActions";

const SignUpComp = ({ signUp, authError, firebase, firestore }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [age, setAge] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nickName, setNickName] = useState("");
  const inputs = [
    { value: nickName, type: "Nick name" },
    { value: firstName, type: "First name" },
    { value: lastName, type: "Last name" },
    { value: age, type: "Age" }
  ];

  function handleChange(ev, type) {
    if (type === "email") {
      setEmail(ev);
    } else if (type === "password") {
      setPassword(ev);
    } else if (type === "password2") {
      setPassword2(ev);
    } else if (type === "Age") {
      setAge(ev);
    } else if (type === "First name") {
      setFirstName(ev);
    } else if (type === "Last name") {
      setLastName(ev);
    } else {
      setNickName(ev);
    }
  }

  function _onSubmit(e) {
    e.preventDefault();
    if (password === password2) {
      signUp(
        {
          email,
          password,
          nickName,
          firstName,
          lastName,
          age
        },
        firebase,
        firestore
      );
    } else {
      // eslint-disable-next-line no-alert
      alert("Confirm password dont match to password!!!");
      setPassword("");
      setPassword2("");
    }
  }

  return (
    <div>
      <Typography component="h1" variant="h5">
        Sign Up
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
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Confirm Password"
          type="password"
          id="password2"
          autoComplete="current-password"
          value={password2}
          onChange={({ target: { value } }) => {
            handleChange(value, "password2");
          }}
        />
        {inputs.map(el => (
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            key={el.type}
            label={el.type}
            value={el.value}
            onChange={({ target: { value } }) => {
              handleChange(value, el.type);
            }}
          />
        ))}

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
  signUp: (credential, firebase, firestore) =>
    dispatch(SignUpAction(credential, firebase, firestore))
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withFirebase,
  withFirestore
)(SignUpComp);
