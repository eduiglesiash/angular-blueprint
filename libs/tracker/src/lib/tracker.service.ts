export interface TrackingEntry {
  origin: string;
  type: string;
  message: string;
  value?: any;
}

export abstract class TrackerService {
  constructor() {}

  abstract writeError(error: TrackingEntry);

  abstract writeEvent(event: TrackingEntry);
}

export class ConsoleService extends TrackerService {
  constructor() {
    super();
  }

  writeError(error: TrackingEntry) {
    console.error(error);
  }

  writeEvent(event: TrackingEntry) {
    console.warn(event);
  }
}

export class NullTrackerService extends TrackerService {
  constructor() {
    super();
    if (window && window.console) {
      window.console.log = function() {};
      window.console.error = function() {};
    }
  }

  writeError(error: TrackingEntry) {}

  writeEvent(event: TrackingEntry) {}
}
