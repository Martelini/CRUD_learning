export interface HttpRequest {
    body: any;
    params: any;
}

export interface HttpResponse {
    status(code: number): HttpResponse;
    json(data: any): HttpResponse;
}