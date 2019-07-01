import React from "react";
import { connect } from "react-redux";
import { Button, IconButton, Avatar } from "@material-ui/core";
import { push as pushRouth } from "connected-react-router";
import { withFirebase } from "react-redux-firebase";
import { SignOutAction } from "../actions/authActions";
import { compose } from "../../../../../Library/Caches/typescript/3.5/node_modules/redux";

const SignInLinks = ({ push, signOut, firebase }) => {
  return (
    <>
      <Button onClick={() => push("/new_project")}>Create project</Button>
      <Button
        onClick={ev => {
          signOut(ev, firebase);
          push("/");
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
  signOut: (ev, firebase) => dispatch(SignOutAction(ev, firebase)),
  push: () => dispatch(pushRouth())
});

const mapStateToProps = (state, ownProps) => ({
  id: ownProps
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withFirebase
)(SignInLinks);
