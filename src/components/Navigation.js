import React from 'react';
import { AppBar, Typography, Toolbar } from '@material-ui/core';
import SignInLinks from './SignInLinks';
import SignOutLinks from './SignOutLinks';
import { Route, Link, Switch } from 'react-router-dom';
import Havayi1 from './Havayi1';
import Havayi2 from './Havayi2';
import HOCPrivateRoute from '../conteiners/HOCPrivateRoute';
import Welcome from './Welcome';
import { connect } from 'react-redux';
import SignIn from './SignIn';

const Navigation = ({ push }) => {
	return (
		<>
			<AppBar position='fixed'>
				<Toolbar>
					<Typography>
						<Link to='/'>Fake Trello</Link>
					</Typography>
					<SignInLinks />
					<SignOutLinks />
				</Toolbar>
			</AppBar>
			<Switch>
				<Route exact path='/' component={Welcome} />
				<Route path='/sign_in' component={SignIn} />
				<HOCPrivateRoute path='/new_project' component={Havayi2} />
				<HOCPrivateRoute path='/new_project' component={Havayi2} />
				<HOCPrivateRoute path='/new_project' component={Havayi2} />
				<HOCPrivateRoute path='/new_project' component={Havayi2} />
			</Switch>
		</>
	);
};

const mapDispatchToProps = {
	// push
};

export default connect(
	null,
	mapDispatchToProps
)(Navigation);
