import React from "react";
import {
  Dialog,
  DialogTitle,
  Typography,
  DialogContent,
  TextField,
  Button
} from "@material-ui/core";

const SerachMembers = ({ handleClick, open, searchField, handleChange }) => {
  return (
    <>
      <Dialog open={open} onClose={handleClick}>
        <DialogTitle>
          <Typography variant="body1">Sarch Member</Typography>
        </DialogTitle>
        <DialogContent>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="User Nick name"
            autoFocus
            value={searchField}
            onChange={handleChange}
          />
          <Button color="secondary" onClick={handleClick}>
            Cencell
          </Button>
          <Button color="primary" onClick={ev => handleClick(ev, 1)}>
            Search
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SerachMembers;
