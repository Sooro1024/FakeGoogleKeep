import React, { useState } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Button,
  CardActions,
  Grid
} from "@material-ui/core";
import { connect } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import SerachMembers from "./SerachMembers";

const Deskboard = ({ desks, deleteDeskFunc, whichDesk }) => {
  const [open, setOpen] = useState(false);
  const [searchField, setSearchField] = useState("");
  function handleClick(ev, type) {
    return type === 1
      ? (console.log("search action", searchField), setSearchField(""))
      : (setSearchField(""), setOpen(!open));
  }
  function handleChange(ev) {
    setSearchField(ev.target.value);
  }
  return desks ? (
    <>
      {desks.map(el => (
        <Grid item lg={4} key={el.key}>
          <Card>
            <CardActionArea onClick={() => whichDesk(el.key, el.values.name)}>
              <CardContent>
                <Typography>{el.values.name}</Typography>
                <Typography>{el.values.description}</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button onClick={() => deleteDeskFunc(el.key)}>
                Delete Board
              </Button>
              <Button
                onClick={() => {
                  handleClick();
                }}
              >
                Add a member
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
      <SerachMembers
        handleClick={handleClick}
        open={open}
        searchField={searchField}
        handleChange={handleChange}
      />
    </>
  ) : (
    <Grid item lg={1}>
      <CircularProgress />
    </Grid>
  );
};

export default connect(
  null,
  null
)(Deskboard);
