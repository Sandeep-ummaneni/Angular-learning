import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Observable,
  catchError,
  map,
  of,
  switchMap,
  tap,
  throwError
} from 'rxjs';

export type NewsItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
  date: string;
};

type NewsResponse = {
  newsdata: NewsItem[];
};

export type NewsCreatePayload = Omit<NewsItem, 'id'>;
export type NewsUpdatePayload = Partial<NewsCreatePayload>;

@Injectable({
  providedIn: 'root',
})
export class News {
  private readonly http = inject(HttpClient);
  private readonly localNewsUrl = 'assets/data/news.json';
  private readonly apiUrl = '/api/news';
  private cache: NewsItem[] = [];
  private hasCache = false;

  getNews(): Observable<NewsItem[]> {

    if (this.hasCache) {
      return of([...this.cache]);
    }

    return this.http.get<NewsResponse>(
      this.localNewsUrl
    ).pipe(
      map(response => response.newsdata ?? []),
      tap(news => {
        this.cache = [...news];
        this.hasCache = true;
      }),
      tap(news => console.debug('News loaded:', news.length)),
      catchError(error =>
        this.handleError(error, 'Unable to load news list.')
      )
    );

  }

  getNewsById(id: number): Observable<NewsItem | null> {

    return this.getNews().pipe(
      map(news =>
        news.find(item => item.id === id) ?? null
      )
    );

  }

  createNews(payload: NewsCreatePayload): Observable<NewsItem> {

    const localCreate = () => {
      const created: NewsItem = {
        id: this.nextId(),
        ...payload
      };

      this.cache = [created, ...this.cache];
      this.hasCache = true;

      return of(created);
    };

    const request$ = this.http.post<NewsItem>(
      this.apiUrl,
      payload
    ).pipe(
      tap(created => {
        this.cache = [created, ...this.cache.filter(item => item.id !== created.id)];
        this.hasCache = true;
        console.debug('News created:', created.id);
      }),
      catchError(() => {
        console.warn('Create endpoint unavailable, using local fallback.');

        return localCreate();
      })
    );

    return this.ensureCacheLoaded().pipe(
      switchMap(() => request$)
    );

  }

  updateNews(id: number, payload: NewsUpdatePayload): Observable<NewsItem> {

    const localUpdate = () => {
      const existing = this.cache.find(item => item.id === id);

      if (!existing) {
        return this.handleError(
          new Error('News item not found.'),
          'Unable to update news item.'
        );
      }

      const updated: NewsItem = {
        ...existing,
        ...payload
      };

      this.cache = this.cache.map(item =>
        item.id === id ? updated : item
      );

      return of(updated);
    };

    const request$ = this.http.put<NewsItem>(
      `${this.apiUrl}/${id}`,
      payload
    ).pipe(
      tap(updated => {
        this.cache = this.cache.map(item =>
          item.id === id ? updated : item
        );
        this.hasCache = true;
        console.debug('News updated:', id);
      }),
      catchError(() => {
        console.warn('Update endpoint unavailable, using local fallback.');

        return localUpdate();
      })
    );

    return this.ensureCacheLoaded().pipe(
      switchMap(() => request$)
    );

  }

  deleteNews(id: number): Observable<void> {

    const localDelete = () => {
      const beforeLength = this.cache.length;
      this.cache = this.cache.filter(item => item.id !== id);

      if (this.cache.length === beforeLength) {
        return this.handleError(
          new Error('News item not found.'),
          'Unable to delete news item.'
        );
      }

      return of(void 0);
    };

    const request$ = this.http.delete<void>(
      `${this.apiUrl}/${id}`
    ).pipe(
      tap(() => {
        this.cache = this.cache.filter(item => item.id !== id);
        this.hasCache = true;
        console.debug('News deleted:', id);
      }),
      catchError(() => {
        console.warn('Delete endpoint unavailable, using local fallback.');

        return localDelete();
      })
    );

    return this.ensureCacheLoaded().pipe(
      switchMap(() => request$)
    );

  }

  private ensureCacheLoaded(): Observable<void> {
    if (this.hasCache) {
      return of(void 0);
    }

    return this.getNews().pipe(
      map(() => void 0)
    );
  }

  private nextId(): number {
    if (this.cache.length === 0) {
      return 1;
    }

    return Math.max(...this.cache.map(item => item.id)) + 1;
  }

  private handleError(error: unknown, fallbackMessage: string): Observable<never> {

    const message =
      typeof error === 'object' &&
      error !== null &&
      'message' in error &&
      typeof (error as { message?: unknown }).message === 'string'
        ? (error as { message: string }).message
        : fallbackMessage;

    return throwError(() => new Error(message));

  }

}
