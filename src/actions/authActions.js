export const SignInAction = (payload, firebase) => {
	return (dispatch, getState) => {
		firebase
			.auth()
			.signInWithEmailAndPassword(payload.email, payload.password)
			.then(() => dispatch({ type: 'SIGN_IN_SUCCESS' }))
			.catch(error => dispatch({ type: 'SIGN_IN_FAILED', payload: error }));
	};
};

export const SignOutAction = (payload, firebase) => {
	return (dispatch, getState) => {
		firebase
			.auth()
			.signOut()
			.then(() => dispatch({ type: 'SIGN_OUT_SUCCESS' }))
			.catch(error => dispatch({ type: 'SIGN_OUT_FAILED', payload: error }));
	};
};
