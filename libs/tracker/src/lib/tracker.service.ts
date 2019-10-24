export interface TrackingEntry {
  origin: string;
  type: string;
  message: string;
  value?: any;
}

export class TrackerService {
  constructor() {}

  writeError(error: TrackingEntry) {}

  writeEvent(event: TrackingEntry) {}
}
