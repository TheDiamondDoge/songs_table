import {combineReducers} from 'redux';
import songs from './songs';

export default combineReducers({
    songsTable: songs
})