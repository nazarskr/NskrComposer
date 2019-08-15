import { Component, OnInit } from '@angular/core';
import { GALLERY_IMAGE, IBio } from '../../shared/interfaces';
import { GalleryImage } from '../../shared/classes';
import { GalleryService } from '../../shared/services/gallery.service';
import { BioService } from '../../shared/services/bio.service';

@Component({
  selector: 'app-admin-about',
  templateUrl: './admin-about.component.html',
  styleUrls: ['./admin-about.component.scss']
})
export class AdminAboutComponent implements OnInit {
  // about
  bio: IBio;
  editBio: string;
  images: Array<GALLERY_IMAGE>;
  imageId: number;
  imageUrl: string;
  imageTitle: string;
  imageAltText: string;
  constructor(private bioService: BioService,
              private galleryService: GalleryService) {
    this.getBio();
    this.getGallery();

  }
  ngOnInit() {
  }
  // bio
  private getBio(): void {
    this.bioService.getBio().subscribe(
      data => {
        this.bio = data;
        this.editBio = this.bio.text;
      },
      err => {
        console.log(err);
      }
    );
  }
  public saveBio(): void {
    this.bio.text = this.editBio;
    this.bioService.saveBio(this.bio).subscribe(() => {
      this.getBio();
    });
  }
  // gallery
  private getGallery(): void {
    this.galleryService.getGallery().subscribe(
      data => {
        this.images = data;
      },
      err => {
        console.log(err);
      }
    );
  }
  public addImage(): void {
    const newId = this.images[this.images.length - 1].id + 1;
    const newImage = new GalleryImage (newId, this.imageUrl, this.imageUrl, this.imageAltText, this.imageTitle);
    this.galleryService.addToGallery(newImage).subscribe(() => {
      this.getGallery();
    });
    this.imageUrl = '';
    this.imageTitle = '';
    this.imageAltText = '';
  }
  public editImage(image: GALLERY_IMAGE): void {
    this.imageId = image.id;
    this.imageUrl = image.url;
    this.imageTitle = image.title;
    this.imageAltText = image.altText;
  }
  public saveImage(): void {
    const newImage = new GalleryImage(
      this.imageId, this.imageUrl, this.imageUrl, this.imageAltText, this.imageTitle
    );
    this.galleryService.updateGallery(newImage).subscribe(() => {
      this.getGallery();
    });
    this.imageId = null;
    this.imageUrl = '';
    this.imageTitle = '';
    this.imageAltText = '';
  }
  public deleteImage(image: GALLERY_IMAGE): void {
    const { id } = image;
    this.galleryService.delFromGallery(id).subscribe(() => {
      this.getGallery();
    });
  }

}
