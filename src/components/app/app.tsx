import React, {FunctionComponent, memo} from 'react';
import SongsTable from '../../containers/songs-table.container';
import styles from './app.module.css';

const App: FunctionComponent = memo(function App() {
    return (
        <div className={styles.wrapper}>
            <SongsTable />
        </div>
    );
});

export default App;
