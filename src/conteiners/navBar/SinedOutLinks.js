import React from 'react'
import { NavLink } from 'react-router-dom'
const SinedOutLinks = () => {
	return (
		<>
			<NavLink to='/a'>Sign In</NavLink>
			<NavLink to='/b'>Sign Up</NavLink>
		</>
	)
}

export default SinedOutLinks
