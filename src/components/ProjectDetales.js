import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
  Button,
  CircularProgress
} from "@material-ui/core";

const ProjectDetales = ({ projects, deleteProjectFunc }) => {
  return projects ? (
    projects.map(el => (
      <Card key={el.key}>
        <CardActionArea>
          <CardContent>
            <Typography>{el.values.ProjectName}</Typography>
            <Typography>{el.values.ProjectDetals}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button onClick={() => deleteProjectFunc(el.key)}>Delete desk</Button>
        </CardActions>
      </Card>
    ))
  ) : (
    <div>
      <CircularProgress />
    </div>
  );
};

export default ProjectDetales;
