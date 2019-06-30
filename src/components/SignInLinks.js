import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { Button, IconButton, Avatar } from '@material-ui/core';

const SignInLinks = ({ push }) => {
	return (
		<>
			<Button onClick={() => push('/new_project')}>Create project</Button>
			<Button onClick={() => push('/')}>Log out</Button>
			<IconButton>
				<Avatar />
			</IconButton>
		</>
	);
};

const mapDispatchToProps = {
	push
};

const mapStateToProps = (state, ownProps) => ({
	id: ownProps
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SignInLinks);
