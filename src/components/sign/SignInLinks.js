import React, { useEffect } from "react";
// import MailIcon from "@material-ui/icons/Mail";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { connect } from "react-redux";
import { Button, IconButton, Badge } from "@material-ui/core";
import { SignOutAction } from "../../actions/authActions";
import { setLisenerForNotifications } from "../../actions/listenNotificationActions";

const SignInLinks = ({ signOut, lisenNot, notif }) => {
  useEffect(() => {
    const unlisenNot = lisenNot();
    // eslint-disable-next-line no-console
    console.log("lisener was set");
    return () => {
      // eslint-disable-next-line no-console
      console.log("lisener was unset");
      unlisenNot();
    };
  }, [lisenNot]);
  return (
    <div style={{ marginLeft: "85%" }}>
      <Button
        color="inherit"
        onClick={ev => {
          signOut(ev);
        }}
      >
        Log out
      </Button>
      {/* <IconButton aria-label="Show 4 new mails" color="inherit">
        <Badge badgeContent={4} color="secondary">
          <MailIcon />
        </Badge>
      </IconButton> */}
      <IconButton color="inherit">
        <Badge
          badgeContent={notif === null ? 0 : notif.length}
          color="secondary"
        >
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <IconButton
        edge="end"
        aria-label="Account of current user"
        // aria-controls={menuId}
        aria-haspopup="true"
        // onClick={handleProfileMenuOpen}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  signOut: ev => dispatch(SignOutAction(ev)),
  lisenNot: () => dispatch(setLisenerForNotifications())
});

const mapStateToProps = state => ({
  notif: state.firestoreReducer.pushNotification
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInLinks);
