export interface Response {
  count: number;
  next: string;
  previous: string;
  results: ResponseResults[];
}

export type ResponseResults = {
  name: string;
  url: string;
};
