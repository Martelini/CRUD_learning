
import { CreateUserUseCase } from './createUser';
import { User } from '../entities/user';
import { mock, MockProxy } from 'jest-mock-extended';
import { UserRepository } from '../infrastructure/database/userDatabase';

describe('Create User Use Case tests', () => {
    let UserRepositoryStub: MockProxy<UserRepository>;
    let sut: CreateUserUseCase;

    beforeEach(() => {
        UserRepositoryStub = mock();
        UserRepositoryStub.createUser.mockResolvedValue({
            status: 'OK'
        })
        sut = new CreateUserUseCase(UserRepositoryStub);
    })

    test('Create a user', async () => {
        const user = new User({
            userId: undefined,
            email: 'johndoe@email.com',
            password: 'john123',
            username: 'johndoe',
            fullName: 'John Doe',
            birthDate: 'May 16th, 1984'
        });

        const result = await sut.execute(user);
        expect(result).toStrictEqual({ status: 'OK' });
    });

    test('Error creating user', async () => {
        UserRepositoryStub.createUser.mockReturnValueOnce(new Promise((resolve, reject) => resolve({status: 'Error'})));
        const userMock = mock<User>();
        const result = await sut.execute(userMock);
        expect(result).toStrictEqual({status: 'Error'});
        expect
    });

});