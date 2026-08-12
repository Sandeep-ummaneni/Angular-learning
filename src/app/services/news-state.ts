import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map } from 'rxjs';

import { NewsItem } from './news';

@Injectable({
  providedIn: 'root'
})
export class NewsStateService {
  private readonly newsSubject = new BehaviorSubject<NewsItem[]>([]);
  private readonly searchSubject = new BehaviorSubject<string>('');
  private readonly selectedNewsIdSubject = new BehaviorSubject<number | null>(null);

  readonly news$ = this.newsSubject.asObservable();
  readonly search$ = this.searchSubject.asObservable();
  readonly selectedNewsId$ = this.selectedNewsIdSubject.asObservable();

  readonly filteredNews$ = combineLatest([this.news$, this.search$]).pipe(
    map(([news, search]) => {
      const normalizedSearch = search.trim().toLowerCase();

      if (!normalizedSearch) {
        return news;
      }

      return news.filter((item) => item.title.toLowerCase().includes(normalizedSearch));
    })
  );

  readonly selectedNews$ = combineLatest([this.news$, this.selectedNewsId$]).pipe(
    map(([news, selectedId]) => {
      if (selectedId === null) {
        return null;
      }

      return news.find((item) => item.id === selectedId) ?? null;
    })
  );

  setNews(news: NewsItem[]): void {
    this.newsSubject.next(news);
  }

  setSearch(searchText: string): void {
    this.searchSubject.next(searchText);
  }

  setSelectedNewsId(id: number | null): void {
    this.selectedNewsIdSubject.next(id);
  }

  addNews(item: NewsItem): void {
    this.newsSubject.next([item, ...this.newsSubject.value]);
  }

  updateNewsItem(updated: NewsItem): void {
    this.newsSubject.next(
      this.newsSubject.value.map((item) =>
        item.id === updated.id ? updated : item
      )
    );
  }

  removeNews(id: number): void {
    this.newsSubject.next(
      this.newsSubject.value.filter((item) => item.id !== id)
    );
  }

  getNewsSnapshot(): NewsItem[] {
    return [...this.newsSubject.value];
  }
}
