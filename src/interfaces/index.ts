export interface Song {
    id: number,
    band?: string,
    name?: string
}

export interface SongsTable {
    loading: boolean,
    payload: {
        songs: Song[],
        observing: number
    }
}

export interface Store {
    songsTable: SongsTable
}