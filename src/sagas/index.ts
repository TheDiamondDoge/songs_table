import {all} from 'redux-saga/effects';
import exportSagas from './watcher-sagas';

export default function* rootSaga() {
    yield all([
        ...exportSagas
    ]);
}