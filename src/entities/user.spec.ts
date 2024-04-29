import { expect, test } from "@jest/globals";
import { User } from "./user";

test('create a user', () => {
    const user = new User(
        undefined,
        'johndow@email.com',
        '123',
        'johndoe',
        'John Doe',
        Date()
    );

    expect(user).toBeInstanceOf(User);

});