const initalState = {
    input: ""
};

export function getSearchInput(state) {
    return state.search.input;
}

const search = (state = initalState, action) => {
    switch (action.type) {
        case "UPDATE_SEARCH_INPUT":
            return { ...state, input: action.payload.input };
        default:
            return state;
    }
};

export default search;
