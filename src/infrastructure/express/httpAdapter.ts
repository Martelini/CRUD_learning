import { Request, Response } from "express";
import { HttpRequest, HttpResponse } from "../../interfaces/adapters/httpParams";

export class HttpAdapter implements HttpRequest, HttpResponse {
    private req: Request;
    private res: Response;

    constructor(req: Request, res: Response) {
        this.req = req;
        this.res = res;
    }

    get body() {
        return this.req.body;
    }

    get params() {
        return this.req.params;
    }

    status(code: number): HttpResponse {
        this.res.status(code);
        return this;
    }

    json(data: any): HttpResponse {
        this.res.json(data);
        return this;
    }
}