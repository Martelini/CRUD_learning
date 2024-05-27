import { GetAllUsersUseCase } from './getAllUsers';
import { User } from '../entities/user';
import { mock, MockProxy } from 'jest-mock-extended';
import { UserRepository } from '../infrastructure/database/userDatabase';

describe('Get All User Use Case tests', () => {
    let UserRepositoryStub: MockProxy<UserRepository>;
    let sut: GetAllUsersUseCase;

    beforeEach(() => {
        UserRepositoryStub = mock();
        const user = new User({
            userId: undefined,
            email: 'johndoe@email.com',
            password: 'john123',
            username: 'johndoe',
            fullName: 'John Doe',
            birthDate: 'May 16th, 1984'
    });
        UserRepositoryStub.getAllUsers.mockResolvedValue(Array(3).fill(user));
        sut = new GetAllUsersUseCase(UserRepositoryStub);
    })

    test('Get array of users', async () => {
        const result = await sut.execute();
        expect(result).toBeTruthy();
        expect(result).toBeInstanceOf(Array);
        if(result !== undefined) {
            expect(result[0]).toBeInstanceOf(User);
        }
    });

});