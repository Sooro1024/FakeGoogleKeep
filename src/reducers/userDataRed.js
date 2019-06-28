const initialState = {
	email: "please insert your mail adres",
	name: "please insert your name",
	password: "please insert your password",
	password2: "please insert your password again"
};

export const userDataRed = (state = initialState, { type, payload }) => {
	switch (type) {
		case "USER_NAME":
			return { ...state, name: payload };

		case "USER_PASS":
			return { ...state, password: payload };

		case "USER_PASS2":
			return { ...state, password2: payload };

		case "USER_EMAIL":
			return { ...state, email: payload };

		default:
			return state;
	}
};
