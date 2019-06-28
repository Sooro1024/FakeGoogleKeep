import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import SinedInLinks from './SinedInLinks'
import SinedOutLinks from './SinedOutLinks'
import { LOGED_IN } from '../../actions/logInAction'

import { connect } from 'react-redux'

export class Navbar extends Component {



	render() {
		return (
		<>
		{!this.props.logedIn && <SinedOutLinks />}
		{this.props.logedIn && <SinedInLinks />}

		<button onClick={() =>this.props.LOGED_IN(true)}>ss</button>
		
		</>
		)
	}
}

const mapStateToProps = (state) => ({ 
	logedIn: state.checkLogIn.logedIn
})

const mapDispatchToProps = {
	LOGED_IN
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)

