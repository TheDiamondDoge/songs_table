import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/app';
import {applyMiddleware, createStore} from 'redux';
import reducer from './reducers';
import {createLogger} from 'redux-logger';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const sagas = createSagaMiddleware();
let middleware;

if (process.env.NODE_ENV !== 'production') {
    middleware = applyMiddleware(
        createLogger(),
        sagas
    );
} else {
    middleware = applyMiddleware(
        sagas
    );
}

const store = createStore(
    reducer,
    middleware
);

sagas.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);