export class Trailer {
  id: number;
  results: object;

  constructor(values: object = {}) {
    Object.assign(this, values);
  }
}
