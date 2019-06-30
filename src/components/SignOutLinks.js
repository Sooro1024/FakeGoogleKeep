import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { Button } from '@material-ui/core';

const SignOutLinks = ({ push }) => {
	return (
		<>
			<Button onClick={() => push('/sign_in')}>Sign in</Button>
			<Button onClick={() => push('/sign_up')}>Sign up</Button>
		</>
	);
};

const mapDispatchToProps = {
	push
};

export default connect(
	null,
	mapDispatchToProps
)(SignOutLinks);
