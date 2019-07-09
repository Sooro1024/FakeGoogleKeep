import React, { useState } from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {
  Grid,
  Card,
  CardContent,
  List,
  IconButton,
  ListItem,
  ListItemText,
  CardHeader,
  Menu,
  MenuItem
} from "@material-ui/core";
import AddCard from "./AddCard";

const ListShortCut = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null); // es pah@ chem haskanum uxaki copy a arac
  }
  const lists = [
    "asdasd",
    "asdasd",
    "asdasd",
    "hytjgf",
    "sdfgfdsg",
    "dfsgfsdg"
  ];
  const a = [
    { name: "first", l: lists, desk: "desk" },
    { name: "second", l: lists, desk: "desk" },
    { name: "third", l: lists, desk: "desk" }
  ];
  return lists
    ? a.map(el => (
        <>
          <Grid item lg={4}>
            <Card>
              <CardHeader
                action={
                  <IconButton aria-label="Settings" onClick={handleClick}>
                    <MoreVertIcon />
                  </IconButton>
                }
                title={el.name}
                subheader={el.desk}
              />
              <CardContent>
                {el.l.map(e => (
                  <List>
                    <ListItem button>
                      <ListItemText primary={e} />
                    </ListItem>
                  </List>
                ))}
                <AddCard />
              </CardContent>
            </Card>
          </Grid>
          <Menu
            id="fade-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Rename List</MenuItem>
            <MenuItem onClick={handleClose}>Delete List</MenuItem>
          </Menu>
        </>
      ))
    : null;
};

export default ListShortCut;
