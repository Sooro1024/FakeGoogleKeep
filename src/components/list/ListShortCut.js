import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {
  Grid,
  Card,
  CardContent,
  IconButton,
  CardHeader,
  Menu,
  MenuItem
} from "@material-ui/core";
import AddCard from "../card/AddCard";
import TrelloCard from "../card/TrelloCard";
import { getListsAction, deleteListAction } from "../../actions/listActions";

const ListShortCut = ({
  listData,
  listsLoading,
  getLists,
  deleteList,
  handleCloseCard
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null); // es pah@ chem haskanum uxaki copy a arac
  }
  useEffect(() => {
    getLists();
  }, [listsLoading, getLists]);
  return listData === null
    ? null
    : listData.map(el => (
        <Grid item lg={4} key={el.key}>
          <Card>
            <CardHeader
              action={
                <IconButton aria-label="Settings" onClick={handleClick}>
                  <MoreVertIcon />
                </IconButton>
              }
              title={el.listName}
              subheader={el.date}
            />
            <CardContent>
              <TrelloCard listKey={el.key} handleClose={handleCloseCard} />
              <AddCard listKey={el.key} />
            </CardContent>
          </Card>
          <Menu
            id="fade-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Rename List</MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                deleteList(el.key);
              }}
            >
              Delete List
            </MenuItem>
          </Menu>
        </Grid>
      ));
};

const mapStateToProps = state => ({
  listsLoading: state.firestoreReducer.listsLoading,
  listData: state.firestoreReducer.listData
});

const mapDispatchToProps = dispatch => ({
  getLists: () => dispatch(getListsAction()),
  deleteList: listKey => dispatch(deleteListAction(listKey))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListShortCut);
