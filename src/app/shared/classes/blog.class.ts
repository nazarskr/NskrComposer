import { IBlog } from '../interfaces';

export class Blog implements IBlog {
   constructor(
    public id: number,
    public date: string,
    public picture: string,
    public message: string,
    public viewMore: string) {}
}
