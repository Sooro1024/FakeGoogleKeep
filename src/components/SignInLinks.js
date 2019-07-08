import React, { useState } from "react";
// import MailIcon from "@material-ui/icons/Mail";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { connect } from "react-redux";
import { Button, IconButton, InputBase, Badge } from "@material-ui/core";
import { SignOutAction } from "../actions/authActions";
import { searchAction } from "../actions/userActions";

const SignInLinks = ({ signOut, searchSubmit, firestore }) => {
  const [search, setSearch] = useState("");

  function onChangeHandler(ev) {
    setSearch(ev.target.value);
  }

  function onEnterPress(ev) {
    if (ev.charCode === 13) {
      searchSubmit(search, firestore);
    }
  }

  return (
    <>
      <Button
        onClick={ev => {
          signOut(ev);
        }}
      >
        Log out
      </Button>{" "}
      <SearchIcon />
      <InputBase
        style={{ backgroundColor: "hsl(240, 100%, 95%)" }}
        placeholder="Search…"
        value={search}
        onChange={onChangeHandler}
        onKeyPress={onEnterPress}
      />
      {/* <IconButton aria-label="Show 4 new mails" color="inherit">
        <Badge badgeContent={4} color="secondary">
          <MailIcon />
        </Badge>
      </IconButton> */}
      <IconButton aria-label="Show 17 new notifications" color="inherit">
        <Badge badgeContent={17} color="secondary">
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
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  signOut: ev => dispatch(SignOutAction(ev)),
  searchSubmit: search => dispatch(searchAction(search))
});

export default connect(
  null,
  mapDispatchToProps
)(SignInLinks);
