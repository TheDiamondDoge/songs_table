import {takeEvery, fork} from 'redux-saga/effects';
import {SONGS_LOAD} from '../actions/songs';
import {loadSongs} from './worker-sagas';

function* watchLoadSongs() {
    yield takeEvery(SONGS_LOAD, loadSongs);
}

const exportSagas = [
    fork(watchLoadSongs)
];

export default exportSagas;