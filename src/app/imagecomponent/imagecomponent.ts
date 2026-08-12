import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

import {
  VoyagerImage,
  VoyagerImageService
} from '../voyager-image';

@Component({
  selector: 'app-imagecomponent',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './imagecomponent.html',
  styleUrls: ['./imagecomponent.css'],
})
export class Imagecomponent implements OnInit, OnDestroy {

  images: VoyagerImage[] = [];

  filteredImages: VoyagerImage[] = [];

  private readonly destroy$ = new Subject<void>();

  constructor(
    private voyagerImageService: VoyagerImageService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {

    this.images =
      this.voyagerImageService.getImages();

    this.filteredImages = this.images;

    this.route.queryParamMap
      .pipe(takeUntil(this.destroy$))
      .subscribe(params => {

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

  ngOnDestroy() {

    this.destroy$.next();

    this.destroy$.complete();

  }

}