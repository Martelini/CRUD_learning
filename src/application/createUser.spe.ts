// import UserRepositoryMock from '../interfaces/repositories/userRepository.mock';
// import { CreateUserUseCase } from './createUser';
// import { User } from '../entities/user';

// jest.mock('../interfaces/repositories/userRepository', () => ({
//     UserRepository: UserRepositoryMock
// }));

// describe('Create User Use Case tests', () => {
//     test('Create a user', async () => {
//         const userRepository = new UserRepositoryMock();
//         const createUserUseCase = new CreateUserUseCase(userRepository);
//         const user = new User(
//             undefined,
//             'johndoe@email.com',
//             'john123',
//             'johndoe',
//             'John Doe',
//             'May 16th, 1984'
//         )

//         const result = await createUserUseCase.execute(user);

//         expect(result).toStrictEqual({ status: 'ok' });
//     });
// });