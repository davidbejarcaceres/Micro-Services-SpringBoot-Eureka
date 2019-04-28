import { Game } from './Game';

export interface Player {
    _id: string;
    name: string;
    lastname: string;
    age: string;
    dni: string
    games: Game[];
    followers: string[];
    following: string[];
}