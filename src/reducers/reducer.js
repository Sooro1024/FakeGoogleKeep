export const mathReducer = (state = { number: "12" }, action) => {
	switch (action.type) {
		case "ADD":
			state = { ...state, number: state.number + action.payload };
			break;

		default:
			break;
	}
	return state;
};
