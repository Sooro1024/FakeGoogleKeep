import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Button,
  CardActions
} from "@material-ui/core";

const Deskboard = () => {
  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <Typography>Deskboard name</Typography>
          <Typography>Deskboard Deskription</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button>Change card name</Button>
        <Button>Delete card</Button>
      </CardActions>
    </Card>
  );
};

export default Deskboard;
