import React, { useState } from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Button
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const AddCard = () => {
  const [open, setOpen] = useState(true);
  const [cardName, setCardName] = useState("");
  function handleClick(ev, type) {
    return type === 1
      ? (setOpen(!open),
        console.log("add card action", cardName),
        setCardName(""))
      : (setOpen(!open), setCardName(""));
  }

  function handleChange(ev) {
    setCardName(ev.target.value);
  }

  return open ? (
    <ListItem button onClick={handleClick}>
      <ListItemIcon>
        <AddIcon />
      </ListItemIcon>
      <ListItemText primary="Add new card to list" />
    </ListItem>
  ) : (
    <>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        label="Card Name"
        autoFocus
        value={cardName}
        onChange={handleChange}
      />
      <Button color="secondary" onClick={handleClick}>
        Cencell
      </Button>
      <Button color="primary" onClick={ev => handleClick(ev, 1)}>
        Create
      </Button>
    </>
  );
};

export default AddCard;
