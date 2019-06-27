export const GET_DATA_ACTION = (data) => {
	return dispatch => {
		fetch('https://restcountries.eu/rest/v2/all')
			.then(res => res.json())
			.then(dat => dispatch({type: 'FETCH_DATA', payload: dat}))
	}
}