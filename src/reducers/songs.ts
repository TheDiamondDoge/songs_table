import {SONG_OBSERVE} from "../actions/songs";

export const songsArray = [
    {
        id: 1,
        band: 'Tool',
        name: 'Fear Inoculum',
    },
    {
        id: 3,
        band: 'Tool',
        name: 'Pneuma',
    },
    {
        id: 9,
        band: 'Tool',
        name: 'Invincible',
    },
    {
        id: 2,
        band: 'Tool',
        name: 'Descending',
    },
    {
        id: 4,
        band: 'Tool',
        name: '7mpest',
    },
];

const initState = {
    loading: false,
    payload: {
        songs: songsArray,
        observing: 0
    }
}

export default (state: any, action: any) => {
    if (state === undefined) return initState;

    switch (action.type) {
        case SONG_OBSERVE: {
            return {
                ...state,
                payload: {
                    ...state.payload,
                    observing: action.id === state.payload.observing ? 0 : action.id
                }
            }
        }
        default:
            return state;
    }
}