export interface RouteLink {
  path: string;
  data?: {
    caption?: string;
    title?: string;
    description?: string;
    tags?: string;
  };
}
