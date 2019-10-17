import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';

declare var gtag;

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {
  constructor() {}

  public handleError(error: any): void {
    if (error instanceof HttpErrorResponse) this.handleHttpError(error);
    else this.handleJsError(error);
  }

  private handleJsError(error: Error): void {
    this.sendError(
      'JsError',
      error.name ? error.name : 'unknown',
      error.message ? error.message : JSON.stringify(error)
    );
  }

  private handleHttpError(error: HttpErrorResponse) {
    const statusCode = error.status;
    const origin = statusCode >= 500 ? 'ServerError' : 'ClientError';
    const message = statusCode + ' : ' + error.statusText;
    this.sendError(origin, error.url, message);
  }

  private sendError(category: string, type: string, message: string) {
    const metric = {
      event_category: category,
      event_label: message,
      value: 1
    };
    gtag('event', type, metric);
  }
}
