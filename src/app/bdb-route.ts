export class BdbRoute {

  private _path: string;
  private _desc: string;

  constructor(path: string, desc: string) {
    this._path = path;
    this._desc = desc;
  }

  get path(): string {
    return this._path;
  }

  set path(value: string) {
    this._path = value;
  }


  get desc(): string {
    return this._desc;
  }

  set desc(value: string) {
    this._desc = value;
  }
}
