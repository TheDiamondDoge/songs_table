import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import SongsTable from '../components/songs-table/songs-table';
import {loadSongs, observeSong} from '../actions/songs';
import {Song, Store} from '../interfaces';

export default (props: any) => {
    const {loading, payload} = useSelector((state: Store) => (state.songsTable));
    const {songs, observing} = payload;
    const dispatch = useDispatch();
    const onSongClick = useCallback((id: number) => {
        dispatch(observeSong(id))
    }, [dispatch]);

    useEffect(() => {
        dispatch(loadSongs());
    }, [dispatch]);

    songs.sort((a: Song, b: Song) => a.id - b.id);
    return (
        <SongsTable
            {...props}
            loading={loading}
            songs={songs}
            observing={observing}
            onRowClick={onSongClick}
        />
    )
}