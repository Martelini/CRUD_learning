import { User } from './user';

describe('User test', () => {
    it('creates a user', () => {
        const user = new User({
            userId: undefined,
            email: 'johndoe@email.com',
            password: 'john123',
            username: 'johndoe',
            fullName: 'John Doe',
            birthDate: 'May 16th, 1984'
        });
    
        expect(user).toBeInstanceOf(User);
        expect(user.fullName).toBe('John Doe');
    
    });
});
