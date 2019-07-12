import React, { useState } from "react";
import { Grid, Button, Typography } from "@material-ui/core";
import { ArrowBackTwoTone, BorderColorTwoTone } from "@material-ui/icons";
import { goBack } from "connected-react-router";
import { connect } from "react-redux";
import CreateNewDesk from "../components/CreateNewDesk";
import ListShortCut from "../components/ListShortCut";
import MembersList from "../components/MembersList";
import CardComponent from "../components/CardComponent";

const ListsContayner = ({ curentDeskName, back }) => {
  const [cardOpen, setCardOpen] = useState(false);
  const [cardData, setCardData] = useState({});
  function handleCardClick(card) {
    return typeof card === "object"
      ? (setCardOpen(!cardOpen), setCardData(card))
      : setCardOpen(!cardOpen);
  }
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
          <Button size="medium" color="primary" onClick={back}>
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
            {curentDeskName}
          </Typography>
          <div>
            <MembersList />
          </div>
        </Grid>
        <Grid item lg={2}>
          <Button size="medium" color="primary">
            Rename Desk
            <BorderColorTwoTone />
          </Button>
        </Grid>
        <ListShortCut handleCloseCard={handleCardClick} />
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
      <CardComponent
        handleClose={handleCardClick}
        open={cardOpen}
        cardData={cardData}
      />
    </>
  );
};

const mapStateToProps = state => ({
  curentDeskName: state.firestoreReducer.curentDeskName
});
const mapDispatchToprops = dispatch => ({
  back: () => dispatch(goBack())
});

export default connect(
  mapStateToProps,
  mapDispatchToprops
)(ListsContayner);
