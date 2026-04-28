import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import json from '../../assets/data/imagedata.json';

@Component({
  selector: 'app-imagecomponent',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './imagecomponent.html',
  styleUrls: ['./imagecomponent.css'],
})
export class Imagecomponent {

  images : any = json.voyagerImages;

}