import { IMixcloud } from '../interfaces';

export class MixcloudTrack implements IMixcloud {
   constructor(
    public id: number,
    public src: string) {}
}
