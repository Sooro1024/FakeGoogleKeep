import React from "react";
import { connect } from "react-redux";
import {
  Card,
  CardHeader,
  CardContent,
  CircularProgress
} from "@material-ui/core";
import { Link } from "react-router-dom";

const Havayi1 = ({ deskCollection, requested }) => {
  if (requested) {
    return deskCollection.map(el => (
      <Link to={`/${el.curentDeskName}/:${el.id}`}>
        <Card key={el.id}>
          <CardHeader>{el.deskAuthor}</CardHeader>
          <CardContent>{el.curentDeskName}</CardContent>
        </Card>
      </Link>
    ));
  }
  return <CircularProgress />;
};

const MapDispatchToProps = {
  // CRETATE_DESK
};

const MapStateToProps = state => ({
  deskCollection: state.firestore.ordered.deskCollection,
  requested: state.firestore.status.requested.deskCollection
});

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(Havayi1);
