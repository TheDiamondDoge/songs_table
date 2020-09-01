export const SONG_OBSERVE = "SONG_OBSERVE";

export const observeSong = (id: number) => ({
    type: SONG_OBSERVE,
    id
});