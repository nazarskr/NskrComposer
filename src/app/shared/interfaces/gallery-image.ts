// tslint:disable-next-line:class-name
export interface GALLERY_IMAGE {
    id: number;
    url: string; // url of the image
    thumbnailUrl?: string; // thumbnail url (recommended), if not present, gallery will use `url` property to get thumbnail image.
    altText?: string; // alt text for image
    title?: string; // title of the image
  }
