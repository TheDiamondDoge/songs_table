import React from 'react';
import SongsTable from "../songs-table/songs-table.container";
import styles from "./app.module.css";

function App() {
    return (
        <div className={styles.wrapper}>
            <SongsTable />
        </div>
    );
}

export default App;
