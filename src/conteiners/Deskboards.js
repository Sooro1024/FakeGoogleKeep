import React, { useEffect, useCallback } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withFirestore } from "react-redux-firebase";
import { push } from "connected-react-router";
import Deskboard from "../components/Deskboard";
import CreateNewDesk from "../components/CreateNewDesk";
import {
  getDeskboardsAction,
  deleteDeskAction,
  DeskClickActon
} from "../actions/deskAction";

const Deskboards = ({
  firestore,
  getDeskboardFromServer,
  uid,
  desks,
  loading,
  deleteDesknoards,
  openDesk,
  deskName
}) => {
  const getDeskboardCallback = useCallback(
    () => getDeskboardFromServer(firestore, uid),
    [firestore, uid, getDeskboardFromServer]
  );

  useEffect(() => {
    getDeskboardCallback();
  }, [loading, getDeskboardCallback]);

  function deleteDeskFunc(key) {
    deleteDesknoards(firestore, uid, key);
  }

  function whichProject(key, name) {
    openDesk(key);
    deskName(name);
  }

  return (
    <>
      <Deskboard
        desks={desks}
        deleteDeskFunc={deleteDeskFunc}
        whichProject={whichProject}
      />
      <CreateNewDesk label="Desk" />
    </>
  );
};

const mapStateToProps = state => ({
  uid: state.authReducer.userData.uid,
  desks: state.deskReducer.data,
  loading: state.deskReducer.loading
});

const mapDispatchToProps = dispatch => ({
  getDeskboardFromServer: (firestore, uid) =>
    dispatch(getDeskboardsAction(firestore, uid)),
  deleteDesknoards: (firestore, uid, key) =>
    dispatch(deleteDeskAction(firestore, uid, key)),
  openDesk: e => dispatch(push(`/home/${e}`)),
  deskName: e => dispatch(DeskClickActon(e))
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withFirestore
)(Deskboards);
