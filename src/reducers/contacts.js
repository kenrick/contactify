import { groupBy, keys, startsWith, lowerCase } from "lodash";
import { getSearchInput } from "./search";

const initalState = {
    lastUpdated: null,
    isFetching: false,
    items: []
};

const getContacts = state => state.contacts.items;
const getGroupedContacts = state => {
    const input = getSearchInput(state);
    let contacts = getContacts(state);

    if (input !== "") {
        contacts = contacts.filter(({ name }) => {
            const names = name.toLowerCase().split(" ");
            return names.some(name => startsWith(name, lowerCase(input)));
        });
    }

    const groupedContacts = groupBy(contacts, ({ name }) => lowerCase(name[0]));
    return keys(groupedContacts).sort().map(key => groupedContacts[key]);
};

export function getVisibleContacts(state) {
    return getGroupedContacts(state);
}

export function getIsFetching(state) {
    return state.contacts.isFetching;
}

const contacts = (state = initalState, action) => {
    switch (action.type) {
        case "SAVE_CONTACT_SUCCEED":
            return {
                ...state,
                items: state.items.concat({ ...action.payload.contact })
            };
        case "FETCH_CONTACTS_STARTED":
            return { ...state, isFetching: true };
        case "FETCH_CONTACTS_SUCCEED":
            return {
                ...state,
                isFetching: false,
                lastUpdated: Date.now(),
                items: [...action.payload.contacts]
            };
        case "FETCH_CONTACTS_FAILED":
            return { ...state, isFetching: true };
        default:
            return state;
    }
};

export default contacts;
