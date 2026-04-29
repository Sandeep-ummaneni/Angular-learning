import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


 export interface VoyagerImage {
  id: number;
  title: string;
  imageUrl: string;
}

export interface ImageResponse {
  voyagerImages: VoyagerImage[];
}

@Injectable({
  providedIn: 'root',
})

export class VoyagerImage  {

 constructor (private http: HttpClient){}

 getimages(): Observable<ImageResponse> {
  return this.http.get<ImageResponse>('assets/data/imagedata.json');
 }

}
