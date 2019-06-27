import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
import { LOGED_IN } from '../../actions/logInAction';
import { Link } from 'react-router-dom'

export class SignIn extends Component {

	render() {
		return (
			<>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {/* <Link to='/' >  */}
					<Button
            type="submit"
            fullWidth
            variant="contained"
						color="primary"
						onClick={()=> this.props.LOGED_IN(true)}
          >
            Sign In
          </Button>
					{/* </Link> */}
        </form>
</>
		)
	}
}

const mapStateToProps = (state) => ({
	//authenticated: state.checkLogin
})

const mapDispatchToProps = {
	LOGED_IN
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
