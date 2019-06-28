import React from 'react'
import { NavLink } from 'react-router-dom'
const SinedOutLinks = () => {
	return (
		<>
			<NavLink to='/sign_in'>Sign In</NavLink>
			<NavLink to='/sign_up'>Sign Up</NavLink>
		</>
	)
}

export default SinedOutLinks
