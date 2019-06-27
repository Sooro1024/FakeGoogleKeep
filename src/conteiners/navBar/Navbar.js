import React from 'react'
import { Link } from 'react-router-dom'
import SinedInLinks from './SinedInLinks'
import SinedOutLinks from './SinedOutLinks'

const NavBar = () => {
	return (
		<>
		<Link to='/' > Home</Link>
		<SinedInLinks />
		<SinedOutLinks />
		</>
	)
}

export default NavBar
