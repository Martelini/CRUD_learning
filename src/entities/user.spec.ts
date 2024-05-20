import { User } from './user';

describe('User test', () => {
    it('creates a user', () => {
        const user = new User(
            undefined,
            'johndow@email.com',
            '123',
            'johndoe',
            'John Doe',
            Date()
        );
    
        expect(user).toBeInstanceOf(User);
        expect(user.fullName).toBe('John Doe');
    
    });
});
