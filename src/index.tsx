import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/app';
import {applyMiddleware, createStore} from "redux";
import reducer from "./reducers";
import {createLogger} from "redux-logger";
import {Provider} from 'react-redux';


const store = createStore(
    reducer,
    applyMiddleware(createLogger())
);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);