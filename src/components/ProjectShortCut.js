import React from "react";
import {
  Typography,
  Divider,
  Button,
  CircularProgress,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  ExpansionPanelActions
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const ProjectShortCut = ({ projects, projectFunctions }) => {
  return projects ? (
    projects.map(el => (
      <ExpansionPanel key={el.key} disabled={!el.values.ProjectStatus}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{el.values.ProjectName}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>{el.values.ProjectDetals}</Typography>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <Button
            size="small"
            onClick={() => projectFunctions(el.key, "delete")}
          >
            Delete project
          </Button>
          <Button
            size="small"
            onClick={() =>
              projectFunctions(el.key, "comlete", !el.values.ProjectStatus)
            }
          >
            {el.values.ProjectStatus ? "Complete" : "Uncomplete"}
          </Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
    ))
  ) : (
    <div>
      <CircularProgress />
    </div>
  );
};

export default ProjectShortCut;
