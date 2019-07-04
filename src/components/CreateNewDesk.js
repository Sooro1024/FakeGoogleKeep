import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Fab
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import React, { useState } from "react";
import { connect } from "react-redux";
import { withFirebase, withFirestore } from "react-redux-firebase";
import { compose } from "redux";
import { addNewDeskAction } from "../actions/deskAction";
import { addNewProjectAction } from "../actions/projectActions";

const CreateNewDesk = ({
  firestore,
  addNewDesk,
  firebase,
  label,
  addNewProject,
  uid,
  docID,
  deskName
}) => {
  const [dialIsOpen, setDialog] = useState(false);
  const [deskOrProjName, setName] = useState("");
  const [deskOrProjValue, setDeskription] = useState("");

  function hendleChange(value, type) {
    if (type === "name") {
      setName(value);
    } else if (type === "deskription") {
      setDeskription(value);
    } else {
      setDialog(!dialIsOpen);
    }
  }

  function _onSubmit(ev) {
    if (label === "Desk") {
      addNewDesk({ deskOrProjName, deskOrProjValue }, firestore, firebase);
      hendleChange(ev, "close");
      hendleChange("", "name");
      hendleChange("", "deskription");
    } else {
      addNewProject(
        { deskOrProjName, deskOrProjValue },
        firestore,
        uid,
        docID,
        deskName
      );
      hendleChange(ev, "close");
      hendleChange("", "name");
      hendleChange("", "deskription");
    }
  }

  return (
    <>
      <Fab
        color="primary"
        aria-label="Add"
        onClick={ev => hendleChange(ev, "close")}
      >
        <AddIcon />
      </Fab>
      <Dialog
        open={dialIsOpen}
        onClose={ev => hendleChange(ev, "close")}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{`Create new ${label}`}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label={`${label} name`}
            fullWidth
            value={deskOrProjName}
            onChange={ev => hendleChange(ev.target.value, "name")}
          />
          <TextField
            margin="dense"
            id="deskription"
            label={`${label} deskription`}
            fullWidth
            value={deskOrProjValue}
            onChange={ev => hendleChange(ev.target.value, "deskription")}
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
    dispatch(addNewDeskAction(payload, firestore, firebase)),
  addNewProject: (payload, firestore, uid, docID, deskName) =>
    dispatch(addNewProjectAction(payload, firestore, uid, docID, deskName))
});

export default compose(
  connect(
    null,
    mapDispatchToProps
  ),
  withFirestore,
  withFirebase
)(CreateNewDesk);
