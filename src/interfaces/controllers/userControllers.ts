// import { Request } from 'express';
// import { CreateUserUseCase } from '../../application/createUser';
// import { GetAllUsersUseCase } from '../../application/getAllUsers';
// import { GetUserByIdUseCase } from '../../application/getUserById';
// import { mapBodyToUser } from '../../infrastructure/mongodb/userMapper';
// import { HttpRequest, HttpResponse } from '../adapters/httpParams';

// export class UserController {

//     constructor(
//         private readonly getAllUsersUseCase: GetAllUsersUseCase, 
//         private readonly getUserByIdUseCase: GetUserByIdUseCase
//     ) {}



//     async getAllUsersService(request: HttpRequest, response: HttpResponse): Promise<HttpResponse> {
//         console.log('controllers: getAllUsersService');
//         const allUsers = await this.getAllUsersUseCase.execute();
//         if(allUsers !== undefined) {
//             return response.status(200).json(allUsers);
//         }
//         return response.status(404).json({ message: "None user found!"});
//     }

//     async getUserByIdService(request: HttpRequest, response: HttpResponse): Promise<HttpResponse> {
//         console.log('controllers: getUserByIdService');
//         const { userId } = request.params;
//         const user = await this.getUserByIdUseCase.execute(userId);
//         if(user !== undefined) {
//             return response.status(200).json(user);
//         }
//         return response.status(404).json({ message: "User not found!" });
//     }
// }