import React, { useEffect } from "react";
import { connect } from "react-redux";
import CreateNewDesk from "../components/CreateNewDesk";
import {
  getProjectsAction,
  deleteProjectAction,
  completeProjectAction
} from "../actions/projectActions";
import ProjectShortCut from "../components/ProjectShortCut";

const Projects = ({
  match,
  getProjects,
  projects,
  deleteProject,
  loading,
  completeProject
}) => {
  useEffect(() => {
    getProjects(match.params.id);
  }, [getProjects, loading, match.params.id]);

  function projectFunctions(projKey, type, status) {
    return type === "delete"
      ? deleteProject(match.params.id, projKey)
      : completeProject(match.params.id, projKey, status);
  }

  return (
    <>
      <ProjectShortCut
        projects={projects}
        projectFunctions={projectFunctions}
      />
      <CreateNewDesk label="Project" docID={match.params.id} />
    </>
  );
};

const mapStateToProps = state => ({
  pathname: state.router.location.pathname,
  projects: state.projectReducer.projects,
  loading: state.projectReducer.loading
});

const mapDispatchToProps = dispatch => ({
  getProjects: key => dispatch(getProjectsAction(key)),
  deleteProject: (key, projKey) => dispatch(deleteProjectAction(key, projKey)),
  completeProject: (key, projKey, status) =>
    dispatch(completeProjectAction(key, projKey, status))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects);
