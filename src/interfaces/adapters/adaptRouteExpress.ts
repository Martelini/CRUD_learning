import { Request, Response } from "express"
import { HttpRequest, HttpResponse } from "./httpParams"
import { IController } from "../../infrastructure/shared/protocol/controller"

export const adaptRouteExpress = (controller: IController | undefined) => {
    return async (req: Request, res: Response) => {
        if(controller !== undefined) {
            const httpRequest: HttpRequest = {
                body: req.body,
                params: req.params
            }

            const result = await controller.handle(httpRequest);
            let httpResponse: HttpResponse = {status_code: 0, json: {}};

            httpResponse.json = result.data;
            switch(result.status) {
                case 'ok':
                    httpResponse.status_code = 200;
                    break;
                case 'not found':
                    httpResponse.status_code = 404;
                    break;
                default:
                    httpResponse.status_code = 500;
            }
            res.status(httpResponse.status_code).json(httpResponse.json);
        }
        else {
            res.status(501).json({message: 'Endpoint not implemented!'});
        }
    }
}