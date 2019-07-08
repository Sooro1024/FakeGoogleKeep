import React, { useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { Grid } from "@material-ui/core";
import Deskboard from "../components/Deskboard";
import CreateNewDesk from "../components/CreateNewDesk";
import {
  getDeskboardsAction,
  deleteDeskAction,
  DeskClickActon
} from "../actions/deskAction";

const Deskboards = ({
  getDeskboardFromServer,
  desks,
  loading,
  deleteDesknoards,
  openDesk,
  curentDeskName
}) => {
  const getDeskboardCallback = useCallback(() => {
    getDeskboardFromServer();
  }, [getDeskboardFromServer]);

  useEffect(() => {
    getDeskboardCallback();
  }, [loading, getDeskboardCallback]);

  function deleteDeskFunc(key) {
    deleteDesknoards(key);
  }

  function whichProject(key, name) {
    openDesk(key);
    curentDeskName(name, key);
  }

  return (
    <>
      <Grid container spacing={5}>
        <Deskboard
          desks={desks}
          deleteDeskFunc={deleteDeskFunc}
          whichProject={whichProject}
        />
      </Grid>
      <Grid
        spacing={5}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={2}>
          <CreateNewDesk label="Desk" />
        </Grid>
      </Grid>
    </>
  );
};

const mapStateToProps = state => ({
  desks: state.deskReducer.data,
  loading: state.deskReducer.loading
});

const mapDispatchToProps = dispatch => ({
  getDeskboardFromServer: () => dispatch(getDeskboardsAction()),
  deleteDesknoards: key => dispatch(deleteDeskAction(key)),
  openDesk: deskId => dispatch(push(`/home/${deskId}`)),
  curentDeskName: (curentDeskName, curentDeskKey) =>
    dispatch(DeskClickActon(curentDeskName, curentDeskKey))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Deskboards);
