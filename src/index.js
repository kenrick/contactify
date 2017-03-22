import React from "react";
import { render } from "react-dom";
import "./index.css";
import injectTapEventPlugin from "react-tap-event-plugin";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import App from "./components/App";
import reducer from "./reducers";

const middleware = [thunk];

const composeEnhancers = typeof window === "object" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));
const store = createStore(reducer, enhancer);

injectTapEventPlugin();

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
