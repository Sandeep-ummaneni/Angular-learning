import { Component } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import json from '../../assets/data/imagedata.json';
import {VoyagerImage} from '../image'
import { Observable } from 'rxjs';
import { Custom } from '../custom';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-imagecomponent',
  imports: [CommonModule,Custom],
  standalone: true,
  templateUrl: './imagecomponent.html',
  styleUrls: ['./imagecomponent.css'],
})
export class Imagecomponent {



  // imageData$! : Observable<any>;
  // constructor (private images: VoyagerImage){
  //   this.imageData$ = this.images.getimages();
  // }



 images : any = json.voyagerImages;
  filteredImages: any[] = this.images;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {


    this.route.queryParamMap.subscribe(params => {

      const type = params.get('type');


      if (type) {

       this.filteredImages = this.images.filter((img: any) =>
  img.title.toLowerCase().includes(type.toLowerCase())
);

      } else {


        this.filteredImages = this.images;

      }

    });

  }

  setFilter(type: string | null) {

    this.router.navigate([], {
      queryParams: { type },
    });

  }


 
 

}