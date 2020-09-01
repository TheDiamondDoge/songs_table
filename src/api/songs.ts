import {Song} from '../interfaces';

export const SONGS_ARR: Song[] = [
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

export function getSongs() {
    const time = Math.floor(Math.random() * 5) + 1;
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(SONGS_ARR);
        }, time * 1000);
    })
}
