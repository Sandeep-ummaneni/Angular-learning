import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { AppLanguage } from '../i18n/translations';
import { AppStateService } from '../services/app-state';

@Component({
  selector: 'app-header',
  standalone: true,
 imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  private readonly appState = inject(AppStateService);

  readonly labels = computed(() => this.appState.labels());
  readonly language = this.appState.language;
  readonly isAuthenticated = this.appState.isAuthenticated;

  setLanguage(language: AppLanguage): void {
    this.appState.setLanguage(language);
  }

}
