import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import {
  VoyagerImage,
  VoyagerImageService
} from '../voyager-image';

@Component({
  selector: 'app-imagecomponent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './imagecomponent.html',
  styleUrls: ['./imagecomponent.css'],
})
export class Imagecomponent {

  images: VoyagerImage[] = [];

  filteredImages: VoyagerImage[] = [];

  constructor(
    private voyagerImageService: VoyagerImageService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {

    this.images =
      this.voyagerImageService.getImages();

    this.filteredImages = this.images;

    this.route.queryParamMap.subscribe(params => {

      const type = params.get('type');

      if (type === 'voyager') {

        this.filteredImages = this.images.filter(
          image =>
            image.title.toLowerCase().includes('voyager')
        );

      }
      else if (type === 'earth') {

        this.filteredImages = this.images.filter(
          image =>
            image.title.toLowerCase().includes('earth')
        );

      }
      else {

        this.filteredImages = this.images;

      }

    });

  }

  setFilter(type: string | null) {

    this.router.navigate([], {
      queryParams: { type }
    });

  }

}