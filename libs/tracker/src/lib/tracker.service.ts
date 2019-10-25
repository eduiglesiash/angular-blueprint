export interface TrackingEntry {
  origin: string;
  type: string;
  message: string;
  value?: any;
}

export class TrackerService {
  constructor() {}

  writeError(error: TrackingEntry) {
    console.error(error);
  }

  writeEvent(event: TrackingEntry) {
    console.warn(event);
  }
}

export class NullTrackerService {
  constructor() {
    if (window && window.console) {
      window.console.log = function() {};
      window.console.error = function() {};
    }
  }

  writeError(error: TrackingEntry) {}

  writeEvent(event: TrackingEntry) {}
}
