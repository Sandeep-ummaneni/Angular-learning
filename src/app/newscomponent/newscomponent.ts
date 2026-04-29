import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-newscomponent',
  imports: [],
  templateUrl: './newscomponent.html',
  styleUrl: './newscomponent.css',
})
export class Newscomponent {
 
newsData: any[] = [];

constructor(private http: HttpClient) {}

ngOnInit() {
  this.http.get<any[]>('assets/data/imagedata.json').subscribe(data => {
    this.newsData = data;
  });
}
}