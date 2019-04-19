import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import ro from "react-intl/locale-data/ro";
import { Router, Route } from "react-router-dom";
import history from "./history";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux/es/redux";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { localeSet } from "./actions/locale";
import { Provider } from "react-redux";

addLocaleData(en);
addLocaleData(ro);


const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware, thunk))
);

if (localStorage.alhubLang) {
    store.dispatch(localeSet(localStorage.alhubLang));
}

ReactDOM.render(
    <Router history={history}>
        <Provider store={store}>
            <Route component={App} />
        </Provider>
    </Router>,
    document.getElementById("root")
);
