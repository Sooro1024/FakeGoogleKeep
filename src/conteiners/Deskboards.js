import React, { useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withFirestore } from "react-redux-firebase";
import Deskboard from "../components/Deskboard";
import CreateNewDesk from "../components/CreateNewDesk";
import { getDeskboardsAction, deliteDeskAction } from "../actions/deskAction";

const Deskboards = ({
  firestore,
  getDeskboardFromServer,
  uid,
  desks,
  loading,
  deleteDesknoards
}) => {
  useEffect(() => {
    getDeskboardFromServer(firestore, uid);
  }, [loading]);

  function deleteDeskFunc(key) {
    deleteDesknoards(firestore, uid, key);
  }

  return (
    <>
      <Deskboard desks={desks} deleteDeskFunc={deleteDeskFunc} />
      <CreateNewDesk />
    </>
  );
};

const mapStateToProps = state => ({
  uid: state.firebase.auth.uid,
  desks: state.deskReducer.data,
  loading: state.deskReducer.loading
});

const mapDispatchToProps = dispatch => ({
  getDeskboardFromServer: (firestore, uid) =>
    dispatch(getDeskboardsAction(firestore, uid)),
  deleteDesknoards: (firestore, uid, key) =>
    dispatch(deliteDeskAction(firestore, uid, key))
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withFirestore
)(Deskboards);
