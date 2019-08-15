import { IPiecesList } from '../interfaces';

export class PiecesList implements IPiecesList {
    constructor(
        public id: number,
        public title: string,
        public collab: string,
        public perf: string,
        public year: number
    ) {}
}
