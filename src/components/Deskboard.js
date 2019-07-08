import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Button,
  CardActions,
  Grid
} from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

const Deskboard = ({ desks, deleteDeskFunc, whichProject }) => {
  return desks ? (
    desks.map(el => (
      <Grid item xs={4} key={el.key}>
        <Card>
          <CardActionArea onClick={() => whichProject(el.key, el.values.name)}>
            <CardContent>
              <Typography>{el.values.name}</Typography>
              <Typography>{el.values.description}</Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button onClick={() => deleteDeskFunc(el.key)}>Delete desk</Button>
          </CardActions>
        </Card>
      </Grid>
    ))
  ) : (
    <div>
      <CircularProgress />
    </div>
  );
};

export default Deskboard;
