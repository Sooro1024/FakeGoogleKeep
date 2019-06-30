export const CRETATE_DESK = data => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		const firestore = getFirestore();
		firestore
			.collection('deskCollection')
			.add({
				deskAuthor: 'seto',
				deskName: 'e axper'
			})
			.then(() => dispatch({ type: 'CRETATE_DESK', data: 'ba vor asum ei' }))
			.catch(error => dispatch({ type: 'CRETATE_DESK_ERR', error: error }));
	};
};
