import {call, put} from 'redux-saga/effects';
import {getSongs} from '../api/songs';
import {loadSongsSuccess} from '../actions/songs';
import {Song} from '../interfaces';

export function* loadSongs() {
    try {
        const data: Song[] = yield call(getSongs);
        yield put(loadSongsSuccess(data));
    } catch (e) {

    }
}