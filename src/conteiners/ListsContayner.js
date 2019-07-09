import React from "react";
import { Grid, Button, Typography } from "@material-ui/core";
import { ArrowBackTwoTone, BorderColorTwoTone } from "@material-ui/icons";
import CreateNewDesk from "../components/CreateNewDesk";
import ListShortCut from "../components/ListShortCut";

const ListsContayner = () => {
  return (
    <>
      <Grid
        container
        spacing={8}
        direction="row"
        justify="space-evenly"
        alignItems="stretch"
      >
        <Grid item lg={2}>
          <Button size="medium" color="primary">
            Back
            <ArrowBackTwoTone />
          </Button>
        </Grid>
        <Grid item lg={8}>
          <Typography
            variant="h6"
            color="textPrimary"
            style={{ textAlign: "center" }}
          >
            Current Deskboard name
          </Typography>
        </Grid>
        <Grid item lg={2}>
          <Button size="medium" color="primary">
            Rename Desk
            <BorderColorTwoTone />
          </Button>
        </Grid>
        <ListShortCut />
        <Grid
          container
          spacing={8}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item lg={1}>
            <CreateNewDesk label="List" />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ListsContayner;
