import React, { useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withFirestore } from "react-redux-firebase";
import CreateNewDesk from "../components/CreateNewDesk";
import {
  getProjectsAction,
  deleteProjectAction,
  completeProjectAction
} from "../actions/projectActions";
import ProjectShortCut from "../components/ProjectShortCut";

const Projects = ({
  uid,
  deskName,
  match,
  firestore,
  getProjects,
  projects,
  deleteProject,
  loading,
  completeProject
}) => {
  useEffect(() => {
    getProjects(uid, match.params.id, deskName, firestore);
  }, [deskName, firestore, getProjects, loading, match.params.id, uid]);

  function projectFunctions(projKey, type, status) {
    return type === "delete"
      ? deleteProject(firestore, uid, match.params.id, deskName, projKey)
      : completeProject(
          firestore,
          uid,
          match.params.id,
          deskName,
          projKey,
          status
        );
  }

  return (
    <>
      <ProjectShortCut
        projects={projects}
        projectFunctions={projectFunctions}
      />
      <CreateNewDesk
        label="Project"
        uid={uid}
        docID={match.params.id}
        deskName={deskName}
      />
    </>
  );
};

const mapStateToProps = state => ({
  uid: state.authReducer.userData.uid,
  pathname: state.router.location.pathname,
  deskName: state.deskReducer.deskName,
  projects: state.projectReducer.projects,
  loading: state.projectReducer.loading
});

const mapDispatchToProps = dispatch => ({
  getProjects: (uid, key, deskName, firestore) =>
    dispatch(getProjectsAction(uid, key, deskName, firestore)),
  deleteProject: (firestore, uid, key, deskName, projKey) =>
    dispatch(deleteProjectAction(firestore, uid, key, deskName, projKey)),
  completeProject: (firestore, uid, key, deskName, projKey, status) =>
    dispatch(
      completeProjectAction(firestore, uid, key, deskName, projKey, status)
    )
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withFirestore
)(Projects);
