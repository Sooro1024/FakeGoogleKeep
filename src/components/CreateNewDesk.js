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
import { addNewDeskAction } from "../actions/deskAction";
import { ListAddAction } from "../actions/listActions";

const CreateNewDesk = ({ addNewDesk, label, addList }) => {
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
      addNewDesk({ deskOrProjName, deskOrProjValue });
      hendleChange(ev, "close");
      hendleChange("", "name");
      hendleChange("", "deskription");
    } else {
      addList(deskOrProjName);
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
          {label === "Desk" && (
            <TextField
              margin="dense"
              id="deskription"
              label={`${label} deskription`}
              fullWidth
              value={deskOrProjValue}
              onChange={ev => hendleChange(ev.target.value, "deskription")}
            />
          )}
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
  addNewDesk: payload => dispatch(addNewDeskAction(payload)),
  addList: listname => dispatch(ListAddAction(listname))
});

export default connect(
  null,
  mapDispatchToProps
)(CreateNewDesk);
