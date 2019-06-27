import React from 'react'
import { NavLink } from 'react-router-dom'
const SinedInLinks = () => {
	return (
		<>
			<NavLink to='/c'>Create New Project</NavLink>
			<NavLink to='/d'>Log Out</NavLink>
			<NavLink to='/e'>Profile setings</NavLink>
		</>
	)
}

export default SinedInLinks
