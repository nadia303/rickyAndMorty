import { Resident } from './resident';

export type Location = {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: Resident[];
    url: string;
    created: string;
}