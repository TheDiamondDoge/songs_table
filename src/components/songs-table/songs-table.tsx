import React from "react";
import styles from "./songs-table.module.css";
import SongRow from "./comps/song-row/song-row";

interface Song {
    id: number,
    band: string,
    name: string,
    observing?: boolean
}

interface SongsTable {
    songs: Song[],
    onRowClick?: any,
    observing?: number
}

export default function SongsTable({songs, onRowClick, observing}: SongsTable) {
    return (
        <table className={styles.table}>
            <thead>
            <tr>
                <th className={styles.id_column}>
                    ID
                </th>
                <th className={styles.song_column}>
                    Песня
                </th>
            </tr>
            </thead>
            <tbody>
            {songs.map(
                song => {
                    let isObserving = song.id === observing;
                    return (
                        <SongRow
                            key={song.id}
                            onClick={onRowClick}
                            song={song}
                            isObserving={isObserving}
                        />
                    )
                }
            )}
            </tbody>
        </table>
    );
}