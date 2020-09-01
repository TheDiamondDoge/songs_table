import React, {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import SongsTable from "./songs-table";
import {observeSong} from "../../actions/songs";

export default (props: any) => {
    const {songs, observing} = useSelector((state: any) => (state.songsTable.payload));
    const dispatch = useDispatch();
    const onSongClick = useCallback((id) => {
        dispatch(observeSong(id))
    }, [dispatch]);

    songs.sort((a: any, b: any) => a.id - b.id);
    return (
        <SongsTable {...props}
                   onRowClick={onSongClick}
                   songs={songs}
                   observing={observing}
        />
    )
}