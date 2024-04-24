import { Document } from "mongodb";

export class BaseModel<T> implements Document {
  [key: string]: any;

  constructor(data: T) {
    Object.assign(this, data);
  }
}