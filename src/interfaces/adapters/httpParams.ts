import { Request, Response } from "express";

export interface HttpRequest {
    body: Request["body"];
    params: Request["params"];
}

export interface HttpResponse {
    status(code: Response["statusCode"]): Response;
    json(data: Response["json"]): Response;
}