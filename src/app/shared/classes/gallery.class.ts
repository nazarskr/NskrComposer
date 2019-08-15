import { GALLERY_IMAGE } from '../interfaces';

export class GalleryImage implements GALLERY_IMAGE {
   constructor(
    public id: number,
    public url: string,
    public thumbnailUrl?: string,
    public altText?: string,
    public title?: string) {}
}
