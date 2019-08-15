import { IEvent } from '../interfaces';

export class Event implements IEvent {
    constructor(
        public id: number,
        public date: string,
        public time: string,
        public location: string,
        public city: string,
        public event: string,
        public piece: string,
    ) {}
}
