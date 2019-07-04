import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Button, IconButton, Avatar } from "@material-ui/core";
import { withFirebase } from "react-redux-firebase";
import { SignOutAction } from "../actions/authActions";

const SignInLinks = ({ signOut, firebase }) => {
  return (
    <>
      <Button
        onClick={ev => {
          signOut(ev, firebase);
        }}
      >
        Log out
      </Button>
      <IconButton>
        <Avatar />
      </IconButton>
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  signOut: (ev, firebase) => dispatch(SignOutAction(ev, firebase))
});

export default compose(
  connect(
    null,
    mapDispatchToProps
  ),
  withFirebase
)(SignInLinks);
