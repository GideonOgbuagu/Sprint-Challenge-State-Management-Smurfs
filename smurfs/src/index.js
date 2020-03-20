import React from "react";
import { Provider } from 'react-redux';
import ReactDOM from "react-dom";
import "./index.css";
import { smurfsReducer } from './reducers/smurfsReducer'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from "./components/App";

export const store = createStore(smurfsReducer, applyMiddleware(thunk));


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById("root"));
