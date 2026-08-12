import { DOCUMENT } from '@angular/common';
import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { AppLanguage, translations } from '../i18n/translations';
import { AuthTokenService } from './auth-token';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  private readonly document = inject(DOCUMENT);
  private readonly tokenService = inject(AuthTokenService);

  private readonly languageSignal = signal<AppLanguage>('en');
  private readonly tokenSignal = signal<string | null>(this.tokenService.getToken());

  private readonly languageSubject = new BehaviorSubject<AppLanguage>('en');
  private readonly authSubject = new BehaviorSubject<boolean>(Boolean(this.tokenSignal()));

  readonly language = computed(() => this.languageSignal());
  readonly labels = computed(() => translations[this.languageSignal()]);
  readonly token = computed(() => this.tokenSignal());
  readonly isAuthenticated = computed(() => Boolean(this.tokenSignal()?.trim()));

  readonly language$ = this.languageSubject.asObservable();
  readonly isAuthenticated$ = this.authSubject.asObservable();

  constructor() {
    effect(() => {
      const language = this.languageSignal();
      this.languageSubject.next(language);
      this.document.documentElement.lang = language;
    });

    effect(() => {
      this.authSubject.next(this.isAuthenticated());
    });
  }

  setLanguage(language: AppLanguage): void {
    this.languageSignal.set(language);
  }

  setToken(token: string): void {
    const normalizedToken = token.trim();

    if (!normalizedToken) {
      this.clearToken();
      return;
    }

    this.tokenService.setToken(normalizedToken);
    this.tokenSignal.set(normalizedToken);
  }

  clearToken(): void {
    this.tokenService.clearToken();
    this.tokenSignal.set(null);
  }
}