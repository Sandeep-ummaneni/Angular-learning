import { Component } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
// import json from '../../assets/data/imagedata.json';
import {VoyagerImage} from '../image'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-imagecomponent',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './imagecomponent.html',
  styleUrls: ['./imagecomponent.css'],
})
export class Imagecomponent {



  imageData$! : Observable<any>;
  constructor (private images: VoyagerImage){
    this.imageData$ = this.images.getimages();
  }



 // images : any = json.voyagerImages;

}