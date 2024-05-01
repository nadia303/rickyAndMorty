import { Gender } from './gender';
import { Status } from './status';

export type Character = {
    id: number;
    name: string;
    status: Status;
    species: string;
    type: string;
    gender: Gender;
    origin: {
        name: string;
        url: string;
    };
    location: {
        name: string;
        url: string;
    };
    image: string;
    episode: string[];
    url: string;
    created: string;
}