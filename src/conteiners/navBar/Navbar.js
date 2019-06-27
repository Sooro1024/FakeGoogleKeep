import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom'

export class Navbar extends Component {

	render() {
		return (
		<AppBar position={"static"}>
		<Toolbar>
				<Typography variant="h6" color="inherit">
					Fake Google Keep
				</Typography>

			<Link to='/sign_in'><Button color="inherit">Singn In</Button></Link>
			<Link to='/sign_up'><Button color="inherit">Singn Up</Button></Link>
			{console.log(this.props.a)}
			{/* {this.props.checkLogIn.logedIn === true && <Button color="inherit">Singn Out</Button>} */}
			</Toolbar>
		 </AppBar>
		 
		)
	}
}

const mapStateToProps = (state) => ({
	checkLogIn: state.checkLogIn,
	a: state.number
})

const mapDispatchToProps = {
	
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
