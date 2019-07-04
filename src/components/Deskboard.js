import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Button,
  CardActions
} from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

const Deskboard = ({ desks, deleteDeskFunc, whichProject }) => {
  return desks ? (
    desks.map(el => (
      <Card key={el.key}>
        <CardActionArea
          onClick={() => whichProject(el.key, el.values.DeskName)}
        >
          <CardContent>
            <Typography>{el.values.DeskName}</Typography>
            <Typography>{el.values.DeskDescription}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button onClick={() => deleteDeskFunc(el.key)}>Delete desk</Button>
        </CardActions>
      </Card>
    ))
  ) : (
    <div>
      <CircularProgress />
    </div>
  );
};

export default Deskboard;
