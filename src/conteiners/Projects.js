import React, { useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withFirestore } from "react-redux-firebase";
import CreateNewDesk from "../components/CreateNewDesk";
import {
  getProjectsAction,
  deleteProjectAction
} from "../actions/projectActions";
import ProjectDetales from "../components/ProjectDetales";

const Projects = ({
  uid,
  deskName,
  match,
  firestore,
  getProjects,
  projects,
  deleteProject,
  loading
}) => {
  // const getDeskboardCallback = useCallback(
  //   () => getDeskboardFromServer(firestore, uid),
  //   [firestore, uid, getDeskboardFromServer]
  // );

  useEffect(() => {
    getProjects(uid, match.params.id, deskName, firestore);
  }, [loading]);

  function deleteProjectFunc(projKey) {
    deleteProject(firestore, uid, match.params.id, deskName, projKey);
  }

  return (
    <>
      <ProjectDetales
        projects={projects}
        deleteProjectFunc={deleteProjectFunc}
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
    dispatch(deleteProjectAction(firestore, uid, key, deskName, projKey))
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withFirestore
)(Projects);
