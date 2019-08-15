import { IMessage } from '../interfaces';

export class Message implements IMessage {
   constructor(
    public id: number,
    public date: string,
    public name: string,
    public mail: string,
    public text: string) {}
}
