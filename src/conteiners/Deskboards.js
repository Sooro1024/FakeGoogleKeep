import React from "react";
import { connect } from "react-redux";
import {
  Card,
  CardHeader,
  CardContent,
  CircularProgress
} from "@material-ui/core";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const Deskboards = ({ deskCollection, requested }) => {
  if (requested) {
    return deskCollection.map(el => (
      <Card key={el.id}>
        <CardHeader>{el.deskAuthor}</CardHeader>
        <CardContent>{el.deskName}</CardContent>
      </Card>
    ));
  }
  return <CircularProgress />;
};

const MapDispatchToProps = {
  // CRETATE_DESK
};

const MapStateToProps = state => ({
  deskCollection: state.firestoreReducer.ordered.deskCollection,
  requested: state.firestoreReducer.status.requested.deskCollection
});

export default compose(
  connect(
    MapStateToProps,
    MapDispatchToProps
  ),
  firestoreConnect([
    {
      collection: "deskCollection" // here wy tipe the collection name in our firestore colectione
    }
  ])
)(Deskboards);
