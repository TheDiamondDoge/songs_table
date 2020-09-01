import React, {useCallback} from "react";
import styles from "../../songs-table.module.css";
import classNames from "classnames";

export default function SongRow({song, isObserving, onClick}: any) {
    const songClasses = classNames(
        styles.song_column,
        {[styles.picked]: isObserving}
    );

    const onRowClick = useCallback(() => onClick(song.id), [onClick, song.id]);

    return (
        <tr onClick={onRowClick}>
            <td className={styles.id_column}>
                {song.id}
            </td>
            <td className={songClasses}>
                {`${song.band} - ${song.name}`}
            </td>
        </tr>
    )
}