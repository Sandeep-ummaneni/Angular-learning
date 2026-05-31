import { Injectable } from '@angular/core';

import imagesData from '../assets/data/imagedata.json';

export interface VoyagerImage {
  id: number;
  title: string;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class VoyagerImageService {

  private images: VoyagerImage[] =
    imagesData.voyagerImages;

  getImages(): VoyagerImage[] {

    return this.images;

  }

}