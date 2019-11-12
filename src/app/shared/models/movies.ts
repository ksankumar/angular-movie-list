export class Movies {
  page: number;
  'total_results': string;
  'total_pages': string;
  email: string;
  results: object;

  constructor(values: object = {}) {
    Object.assign(this, values);
  }
}
