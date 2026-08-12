import { CanDeactivateFn } from '@angular/router';

export type HasPendingChanges = {
  hasPendingChanges: () => boolean;
};

export const pendingChangesGuard: CanDeactivateFn<HasPendingChanges> = (component) => {
  if (!component.hasPendingChanges()) {
    return true;
  }

  if (typeof window === 'undefined') {
    return true;
  }

  return window.confirm('You have unsaved changes. Leave this page?');
};