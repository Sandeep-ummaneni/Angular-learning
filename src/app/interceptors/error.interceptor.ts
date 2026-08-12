import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) =>
  next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      const appError = {
        status: error.status,
        message: resolveMessage(error)
      };

      return throwError(() => appError);
    })
  );

function resolveMessage(error: HttpErrorResponse): string {
  if (error.status === 0) {
    return 'Unable to reach server. Please check your network.';
  }

  if (error.status === 401) {
    return 'Authentication required. Please sign in again.';
  }

  if (error.status === 403) {
    return 'You do not have permission to perform this action.';
  }

  if (error.status >= 500) {
    return 'Server error occurred. Please try again later.';
  }

  return error.error?.message ?? 'Request failed. Please try again.';
}
