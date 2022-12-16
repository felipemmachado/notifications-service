import { randomUUID } from 'node:crypto';

export abstract class BaseEntity {
  private _id: string;

  constructor(id?: string) {
    this._id = id ?? randomUUID();
  }

  public get id() {
    return this._id;
  }
}
