import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { Button } from "@material-ui/core";

const SignOutLinks = props => {
  return (
    <div style={{ marginLeft: "85%" }}>
      <Button color="inherit" onClick={() => props.push("/sign_in")}>
        Sign in
      </Button>
      <Button color="inherit" onClick={() => props.push("/sign_up")}>
        Sign up
      </Button>
    </div>
  );
};

const mapDispatchToProps = {
  push
};

export default connect(
  null,
  mapDispatchToProps
)(SignOutLinks);
