import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-imagecomponent',
  imports: [CommonModule],
  templateUrl: './imagecomponent.html',
  styleUrl: './imagecomponent.css',
})
export class Imagecomponent {

 imageData$!: Observable<any>;

  constructor(private http: HttpClient) {
    this.imageData$ = this.http.get('assets/data/imagedata.json');
  }
}
