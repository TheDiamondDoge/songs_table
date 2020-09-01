import React, {FC, memo} from 'react';
import styles from './songs-table.module.css';
import SongRow from './comps/song-row/song-row';
import classNames from 'classnames';
import {Song} from '../../interfaces';

interface SongsTable {
    songs: Song[],
    onRowClick: (id: number) => void,
    observing?: number,
    loading?: boolean
}

const SongsTable: FC<SongsTable> = memo(({
    songs,
    loading = false,
    onRowClick,
    observing
}) => {
    if (loading) {
        return <span>Loading...</span>;
    }

    const headerStyleId = classNames(styles.header, styles.id_column,);
    const headerStyleSong = classNames(styles.song_column, styles.header);

    return (
        <table className={styles.table}>
            <thead className={styles.thead}>
            <tr>
                <th className={headerStyleId}>
                    ID
                </th>
                <th className={headerStyleSong}>
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
});

export default SongsTable;