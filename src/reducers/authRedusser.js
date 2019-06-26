const initialState = {
    name: 'pleaseinsert',
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case "LOG_IN":
        return { ...state, ...payload }

    default:
        return state
    }
}
