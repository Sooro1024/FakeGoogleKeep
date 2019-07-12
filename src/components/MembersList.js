import React, { useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { Avatar, Chip } from "@material-ui/core";
import { FaceTwoTone } from "@material-ui/icons";
import { getMembersAction, deleteMemberAction } from "../actions/userActions";

const MembersList = ({
  membersList,
  getMembers,
  membersLoad,
  deleteMember,
  uid
}) => {
  const membersCallback = useCallback(() => {
    getMembers();
  }, [getMembers]);

  useEffect(() => membersCallback(), [membersCallback, membersLoad]);
  useEffect(() => membersCallback());

  return membersList === null
    ? null
    : membersList.map(
        el =>
          uid !== el.key && (
            <Chip
              key={el.key}
              avatar={
                <Avatar>
                  <FaceTwoTone />
                </Avatar>
              }
              label={el.nickName}
              onDelete={() => deleteMember(el.key)}
            />
          )
      );
};

const mapDispatchToProps = dispatch => ({
  getMembers: () => dispatch(getMembersAction()),
  deleteMember: id => dispatch(deleteMemberAction(id))
});

const mapStateToProps = state => ({
  membersList: state.firestoreReducer.membersList,
  membersLoad: state.firestoreReducer.membersLoad,
  uid: state.authReducer.userData.uid
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MembersList);
