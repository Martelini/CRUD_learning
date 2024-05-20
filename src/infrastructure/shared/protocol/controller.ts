import { IResult } from "./result";

export interface IController<T = unknown> {
    handle(request: T): Promise<IResult>
}