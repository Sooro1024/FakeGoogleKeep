import React from "react";
import {
  Button,
  Typography,
  IconButton,
  Toolbar,
  AppBar,
  Dialog,
  Slide,
  Grid
} from "@material-ui/core";
import { CloseTwoTone } from "@material-ui/icons";

const CardComponent = ({ open, handleClose, cardData }) => {
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Slide}
      TransitionProps={{ direction: "up" }}
    >
      <AppBar>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="Close"
          >
            <CloseTwoTone />
          </IconButton>
          <Typography variant="h6">{cardData.key}</Typography>
          <Button color="inherit" onClick={handleClose}>
            save
          </Button>
        </Toolbar>
      </AppBar>
      <Grid container>
        <Grid item lg={3}></Grid>
      </Grid>
    </Dialog>
  );
};

export default CardComponent;
