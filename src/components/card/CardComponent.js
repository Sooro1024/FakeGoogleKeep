import React from "react";
import { connect } from "react-redux";
import {
  Button,
  Typography,
  IconButton,
  Toolbar,
  AppBar,
  Dialog,
  Slide,
  Grid,
  Container
} from "@material-ui/core";
import { CloseTwoTone } from "@material-ui/icons";
import CardInputFields from "./CardInputFields";
import { deleteCardByKey } from "../../actions/cardActions";

const CardComponent = ({ open, handleClose, cardData, deleteCard }) => {
  if (cardData.values === undefined) {
    return null;
  }
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
          <Typography variant="h6">{cardData.values.name}</Typography>
          {/* <Button color="primary" onClick={handleClose}>
              Save changes
            </Button> */}
          <Button
            color="secondary"
            onClick={() => {
              handleClose();
              deleteCard(cardData.key);
            }}
          >
            Delete card
          </Button>
        </Toolbar>
      </AppBar>
      <Container style={{ marginTop: "100px" }}>
        <Grid container>
          <Grid item lg={6}></Grid>
          <CardInputFields
            cardDesc={
              cardData.values.cardDesc === undefined
                ? ""
                : cardData.values.cardDesc
            }
            cardKey={cardData.key}
          />
        </Grid>
      </Container>
    </Dialog>
  );
};
const mapDispatchToProps = dispatch => ({
  deleteCard: cardKey => dispatch(deleteCardByKey(cardKey))
});

export default connect(
  null,
  mapDispatchToProps
)(CardComponent);
