import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import news from '../../assets/data/news.json'

@Component({
  selector: 'app-newscomponent',
  imports: [],
  templateUrl: './newscomponent.html',
  styleUrl: './newscomponent.css',
})
export class Newscomponent {


  newsdetails = news.newsdata;
selectedNews: any = null;

openModal(news: any) {
  this.selectedNews = news;
}

closeModal() {
  this.selectedNews = null;
}
}