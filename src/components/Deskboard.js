import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Button,
  CardActions
} from "@material-ui/core";

const Deskboard = ({ desks, deleteDeskFunc }) => {
  return desks ? (
    desks.map(el => (
      <Card key={el.keys}>
        <CardActionArea>
          <CardContent>
            <Typography>{el.values.DeskName}</Typography>
            <Typography>{el.values.DeskDescription}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button>Change desk name</Button>
          <Button onClick={() => deleteDeskFunc(el.keys)}>Delete desk</Button>
        </CardActions>
      </Card>
    ))
  ) : (
    <div>Loading</div>
  );
};

export default Deskboard;
