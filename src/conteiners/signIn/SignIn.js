import React, { Component } from 'react'
import { connect } from 'react-redux'
import { LOGED_IN } from '../../actions/logInAction'

export class SignIn extends Component {


	render() {
		return (
			<div>
				<form>
					<input type='Email' value='asa@asd.asd'></input>
					<input type='Name' value='inser your name'></input>
					<input type='password' value='inser your password'></input>
					{this.props.logedIn && <input type='password' value='repeat password'></input>}
					<button onSubmit={LOGED_IN(true)}>SignIn</button>
				</form>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	logedIn: state.checkLogin.logedIn
})

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(LOGED_IN()),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
