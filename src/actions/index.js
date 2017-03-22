import { get, post } from "axios";
import { v4 } from "node-uuid";

export function fetchContacts() {
    return async dispatch => {
        dispatch({ type: "FETCH_CONTACTS_STARTED" });

        try {
            const { data: contacts } = await get(
                "http://localhost:3001/contacts"
            );

            dispatch({ type: "FETCH_CONTACTS_SUCCEED", payload: { contacts } });
        } catch (e) {
            dispatch({ type: "FETCH_CONTACTS_FAILED" });
        }
    };
}

export function createContact(contact) {
    return async dispatch => {
        dispatch({ type: "SAVE_CONTACT_STARTED" });

        try {
            await post("http://localhost:3001/contacts", {
                ...contact,
                id: v4()
            });

            dispatch({ type: "SAVE_CONTACT_SUCCEED", payload: { contact } });
        } catch (e) {
            dispatch({ type: "SAVE_CONTACT_FAILED" });
        }
    };
}

export function updateSearchInput(input) {
    return {
        type: "UPDATE_SEARCH_INPUT",
        payload: {
            input
        }
    };
}
