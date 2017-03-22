const initalState = [];

export function getNotifications(state) {
    return state.notify;
}

const notify = (state = initalState, action) => {
    switch (action.type) {
        case "FETCH_CONTACTS_SUCCEED":
            return state.concat([{ message: "Contacts retrieved!" }]);
        case "FETCH_CONTACTS_FAILED":
            return state.concat([
                { message: "Could not retrieve contact, refresh to try again" }
            ]);
        case "SAVE_CONTACT_SUCCEED":
            return state.concat([{ message: "Contacts saved!" }]);
        case "SAVE_CONTACT_FAILED":
            return state.concat([
                { message: "Failed to save contact! Try again" }
            ]);
        default:
            return state;
    }
};

export default notify;
