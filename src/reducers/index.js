import { combineReducers } from "redux";
import contacts from "./contacts";
import search from "./search";
import notify from "./notify";
import { reducer as formReducer } from "redux-form";

const contactApp = combineReducers({
    contacts,
    search,
    form: formReducer,
    notify
});

export default contactApp;
