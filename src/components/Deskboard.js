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
import { searchUserByNicknameAction } from "../actions/userActions";

const Deskboard = ({
  desks,
  deleteDeskFunc,
  whichDesk,
  searchResult,
  searchUser,
  curentDeskName
}) => {
  const [open, setOpen] = useState(false);
  const [searchField, setSearchField] = useState("");
  function handleClick(ev, type) {
    return type === 1
      ? (searchUser(searchField), setSearchField(""))
      : (setSearchField(""), setOpen(!open));
  }
  function handleChange(ev) {
    setSearchField(ev.target.value);
  }
  return desks ? (
    <>
      {desks.map((el, index) => (
        <Grid item lg={4} key={el.key}>
          <Card>
            <CardActionArea
              onClick={() => whichDesk(el.key, el.values.name, index)}
            >
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
                  curentDeskName(el.values.name, el.key);
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
        searchResult={searchResult}
        searchUser={searchUser}
      />
    </>
  ) : (
    <Grid item lg={1}>
      <CircularProgress />
    </Grid>
  );
};

const mapStateToProps = state => ({
  searchResult: state.firestoreReducer.searchResult
});

const mapDispatchToProps = dispatch => ({
  searchUser: nickName => dispatch(searchUserByNicknameAction(nickName))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Deskboard);
