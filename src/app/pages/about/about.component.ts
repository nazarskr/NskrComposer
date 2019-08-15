import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxImageGalleryComponent, GALLERY_CONF } from 'ngx-image-gallery';
import { IBio, GALLERY_IMAGE } from '../../shared/interfaces';
import { GalleryService } from '../../shared/services/gallery.service';
import { BioService } from '../../shared/services/bio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  @ViewChild (NgxImageGalleryComponent, {static: false}) ngxImageGallery: NgxImageGalleryComponent;

  // gallery configuration
  conf: GALLERY_CONF = {
    imageOffset: '0px',
    imageBorderRadius: '10px',
    showDeleteControl: false,
    showImageTitle: true,
    reactToKeyboard: true,
    closeOnEsc: true,
    backdropColor: 'black',
    thumbnailSize: 60
  };

  // gallery images
  images: Array<GALLERY_IMAGE>;
  bio: IBio;

  constructor(private galleryService: GalleryService,
              private bioService: BioService) {
    this.getGallery();
    this.getBio();
  }

  ngOnInit() {
  }

  private getBio(): void {
    this.bioService.getBio().subscribe(
      data => {
        this.bio = data;
      },
      err => {
        console.log(err);
      }
    );
  }
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
  // open gallery
  openGallery(index: number) {
    this.ngxImageGallery.open(index);
  }

  // close gallery
  closeGallery() {
    this.ngxImageGallery.close();
  }

  // set new active(visible) image in gallery
  newImage(index: number = 0) {
    this.ngxImageGallery.setActiveImage(index);
  }

  // next image in gallery
  nextImage(index: number = 0) {
    this.ngxImageGallery.next();
  }

  // prev image in gallery
  prevImage(index: number = 0) {
    this.ngxImageGallery.prev();
  }
  // EVENTS
  // callback on gallery opened
  galleryOpened(index) {
  }

  // callback on gallery closed
  galleryClosed() {
  }

  // callback on gallery image clicked
  galleryImageClicked(index) {
  }

// callback on gallery image changed
  galleryImageChanged(index) {
  }

  // callback on user clicked delete button
  deleteImage(index) {
  }
}
