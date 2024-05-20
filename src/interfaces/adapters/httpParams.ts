import { Request, Response } from "express";

export interface HttpRequest {
    body: unknown;
    params: unknown;
}

export interface HttpResponse {
    status_code: number;
    json: unknown;
} 