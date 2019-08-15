import { IYoutube } from '../interfaces';

export class YoutubeVideo implements IYoutube {
   constructor(
    public id: number,
    public youtubeId: string) {}
}
