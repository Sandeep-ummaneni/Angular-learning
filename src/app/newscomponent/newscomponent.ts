import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
//filteredNews: any[] = [];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
  this.route.paramMap.subscribe(params => {
    const id = params.get('id');  

    if (id) {
      this.selectedNews = this.newsdetails.find(n => String(n.id) === id) ?? null;
    } else {
      this.selectedNews = null;    
    }
  });
}

  openModal(newsItem: any) {
    this.router.navigate(['/news', newsItem.id], {
    });
  }

closeModal() {
  this.selectedNews = null;
  this.router.navigate(['/news/all']);                                 
}

}