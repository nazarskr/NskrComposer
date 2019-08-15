import { IMyApps } from '../interfaces';

export class MyApps implements IMyApps {
    constructor(
        public id: number,
        public link: string,
        public appImage: string,
        public name: string,
        public description: string
    ) {

    }
}
