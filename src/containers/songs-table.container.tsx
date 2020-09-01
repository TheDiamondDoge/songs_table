import React, {FC, memo, useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import SongsTable from '../components/songs-table/songs-table';
import {loadSongs, observeSong} from '../actions/songs';
import {Song, Store} from '../interfaces';

const SongsTableContainer: FC = memo(() => {
    const dispatch = useDispatch();
    const {loading, payload} = useSelector((state: Store) => (state.songsTable));
    const {songs, observing} = payload;
    const onSongClick = useCallback((id: number) => {
        dispatch(observeSong(id))
    }, [dispatch]);

    useEffect(() => {
        dispatch(loadSongs());
    }, [dispatch]);

    songs.sort((a: Song, b: Song) => a.id - b.id);
    return (
        <SongsTable
            loading={loading}
            songs={songs}
            observing={observing}
            onRowClick={onSongClick}
        />
    )
})

export default SongsTableContainer;