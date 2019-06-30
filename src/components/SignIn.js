import React, { useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { TextField, Typography, Button } from '@material-ui/core';
import { SignInAction } from '../actions/authActions';
import { withFirebase } from 'react-redux-firebase';

const SignIn = ({ SignInAction, authError, firebase }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	function handleChange(ev, type) {
		switch (type) {
			case 'email':
				return setEmail(ev.target.value);
			case 'password':
				return setPassword(ev.target.value);
			default:
				break;
		}
	}

	function _onSubmit(e) {
		e.preventDefault();
		SignInAction(
			{
				email,
				password
			},
			firebase
		);
	}

	return (
		<div>
			<Typography component='h1' variant='h5'>
				Sign in
			</Typography>
			<form onSubmit={_onSubmit}>
				<TextField
					variant='outlined'
					margin='normal'
					required
					fullWidth
					id='email'
					label='Email Address'
					name='email'
					autoComplete='email'
					autoFocus
					value={email}
					onChange={ev => {
						handleChange(ev, 'email');
					}}
				/>
				<TextField
					variant='outlined'
					margin='normal'
					required
					fullWidth
					name='password'
					label='Password'
					type='password'
					id='password'
					autoComplete='current-password'
					value={password}
					onChange={ev => {
						handleChange(ev, 'password');
					}}
				/>
				<Button type='submit' variant='contained' color='primary'>
					Sign In
				</Button>
			</form>
		</div>
	);
};

const mapStateToProps = state => ({
	authError: state.authReducer.authError
});

const mapDispatchToProps = {
	SignInAction
};

export default compose(
	connect(
		mapStateToProps,
		mapDispatchToProps
	),
	withFirebase
)(SignIn);
