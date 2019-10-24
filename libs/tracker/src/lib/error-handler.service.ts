import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { TrackerService } from './tracker.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {
  constructor(private trackerService: TrackerService) {}

  public handleError(error: any): void {
    if (error instanceof HttpErrorResponse) {
      this.handleHttpError(error);
    } else {
      this.handleJsError(error);
    }
  }

  private handleHttpError(error: HttpErrorResponse) {
    const statusCode = error.status;
    const origin = statusCode >= 500 ? 'ServerError' : 'ClientError';
    const message = statusCode + ' : ' + error.statusText;
    this.trackerService.writeError({ origin, type: error.url, message });
  }

  private handleJsError(error: Error): void {
    const type = error.name ? error.name : 'unknown';
    const message = error.message ? error.message : JSON.stringify(error);
    this.trackerService.writeError({ origin: 'JsError', type, message });
  }
}
