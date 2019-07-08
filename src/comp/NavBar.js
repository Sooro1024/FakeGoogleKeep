import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";

const NavBar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="Menu">
          <Menu />
        </IconButton>
        <Typography variant="h6">Fake Trello</Typography>
        <Button color="inherit">Login</Button>
        <Button color="inherit">Sign Up</Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
