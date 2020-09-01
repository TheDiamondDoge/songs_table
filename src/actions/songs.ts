import {Song} from '../interfaces';

export const SONGS_LOAD = 'SONGS_LOAD';
export const SONGS_LOAD_SUCCESS = 'SONGS_LOAD_SUCCESS';
export const SONG_OBSERVE = 'SONG_OBSERVE';

export const loadSongs = () => ({
    type: SONGS_LOAD,
});

export const loadSongsSuccess = (songs: Song[]) => ({
    type: SONGS_LOAD_SUCCESS,
    songs,
});

export const observeSong = (id: number) => ({
    type: SONG_OBSERVE,
    id
});