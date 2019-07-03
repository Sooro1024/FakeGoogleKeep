import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography
} from "@material-ui/core";
import { AddCircle } from "@material-ui/icons";
import React, { useState } from "react";
import { connect } from "react-redux";
import { withFirebase, withFirestore } from "react-redux-firebase";
import { compose } from "redux";
import addNewDeskAction from "../actions/addNewDeskAction";

const CreateNewDesk = ({ firestore, addNewDesk, firebase }) => {
  const [dialIsOpen, setDialog] = useState(false);
  const [newDeskName, setName] = useState("");
  const [newDeskDeskrip, setDeskription] = useState("");

  function hendleChange(ev, type) {
    if (type === "name") {
      setName(ev.target.value);
    } else if (type === "deskription") {
      setDeskription(ev.target.value);
    } else {
      setDialog(!dialIsOpen);
    }
  }

  function _onSubmit(ev) {
    addNewDesk({ newDeskName, newDeskDeskrip }, firestore, firebase);
    hendleChange(ev, "close");
  }

  return (
    <>
      <Card>
        <CardActionArea onClick={ev => hendleChange(ev, "close")}>
          <CardContent>
            <Typography>Create New Deskboard</Typography>
            <AddCircle />
          </CardContent>
        </CardActionArea>
      </Card>
      <Dialog
        open={dialIsOpen}
        onClose={ev => hendleChange(ev, "close")}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Create New Desk</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Desk name"
            fullWidth
            value={newDeskName}
            onChange={ev => hendleChange(ev, "name")}
          />
          <TextField
            margin="dense"
            id="deskription"
            label="Desk deskription"
            fullWidth
            value={newDeskDeskrip}
            onChange={ev => hendleChange(ev, "deskription")}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={ev => hendleChange(ev, "close")} color="primary">
            Cancel
          </Button>
          <Button onClick={_onSubmit} type="submit" color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  addNewDesk: (payload, firestore, firebase) =>
    dispatch(addNewDeskAction(payload, firestore, firebase))
});

export default compose(
  connect(
    null,
    mapDispatchToProps
  ),
  withFirestore,
  withFirebase
)(CreateNewDesk);
