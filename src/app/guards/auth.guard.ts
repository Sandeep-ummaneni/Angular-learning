import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { AppStateService } from '../services/app-state';

export const authGuard: CanActivateFn = (_route, state) => {
  const appState = inject(AppStateService);
  const router = inject(Router);

  if (appState.isAuthenticated()) {
    return true;
  }

  return router.createUrlTree(['/security'], {
    queryParams: { redirectTo: state.url }
  });
};