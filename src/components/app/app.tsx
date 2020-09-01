import React, {FC} from 'react';
import SongsTable from '../../containers/songs-table.container';
import styles from './app.module.css';

const App: FC = () => {
    return (
        <div className={styles.wrapper}>
            <SongsTable />
        </div>
    );
};

export default App;
