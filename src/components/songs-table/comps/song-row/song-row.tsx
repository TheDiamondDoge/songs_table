import React, {FC, memo, useCallback} from 'react';
import styles from '../../songs-table.module.css';
import ObservingIcon from '../../../observing-icon/observing-icon';
import {Song} from '../../../../interfaces';

interface SongRowProps {
    song: Song,
    isObserving?: boolean,
    onClick: (id: number) => void
}

const SongRow: FC<SongRowProps> = memo(({
    song,
    isObserving = false,
    onClick
}) => {
    const onRowClick = useCallback(() =>
        onClick(song.id),
        [onClick, song.id]
    );

    return (
        <tr onClick={onRowClick}>
            <td className={styles.id_column}>
                {song.id}
            </td>
            <td className={styles.song_column}>
                {`${song.band} - ${song.name}`}
                {isObserving && <ObservingIcon classname={styles.observe_icon}/>}
            </td>
        </tr>
    )
});

export default SongRow;