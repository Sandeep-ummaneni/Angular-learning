import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { HasPendingChanges } from '../guards/pending-changes.guard';
import { AppStateService } from '../services/app-state';

@Component({
  selector: 'app-security',
  imports: [FormsModule],
  templateUrl: './security.html',
  styleUrl: './security.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SecurityComponent implements HasPendingChanges {
  private readonly appState = inject(AppStateService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  readonly tokenInput = signal('');
  readonly labels = computed(() => this.appState.labels());
  readonly isAuthenticated = this.appState.isAuthenticated;

  saveToken(): void {
    this.appState.setToken(this.tokenInput());
    this.tokenInput.set('');

    const redirectTo = this.route.snapshot.queryParamMap.get('redirectTo');

    if (redirectTo) {
      this.router.navigateByUrl(redirectTo);
    }
  }

  useDemoToken(): void {
    this.appState.setToken('demo-jwt-token');

    const redirectTo = this.route.snapshot.queryParamMap.get('redirectTo');

    if (redirectTo) {
      this.router.navigateByUrl(redirectTo);
    }
  }

  clearToken(): void {
    this.appState.clearToken();
  }

  hasPendingChanges(): boolean {
    return this.tokenInput().trim().length > 0;
  }
}