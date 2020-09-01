import {SONG_OBSERVE, SONGS_LOAD, SONGS_LOAD_SUCCESS} from '../actions/songs';
import {Song, SongsTable} from '../interfaces';

const initState = {
    loading: false,
    payload: {
        songs: [],
        observing: 0
    }
}

interface Action {
    type: string,
    id?: number,
    songs?: Song[]
}

export default (state: SongsTable, action: Action) => {
    if (state === undefined) return initState;

    switch (action.type) {
        case SONGS_LOAD: {
            return {
                ...state,
                loading: true,
            }
        }
        case SONGS_LOAD_SUCCESS: {
            return {
                ...state,
                loading: false,
                payload: {
                    ...state.payload,
                    songs: action.songs
                }
            }
        }
        case SONG_OBSERVE: {
            return {
                ...state,
                payload: {
                    ...state.payload,
                    observing: action.id === state.payload.observing ? 0 : action.id
                }
            }
        }
        default:
            return state;
    }
}