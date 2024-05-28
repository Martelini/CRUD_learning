import { UserRepository } from "../../infrastructure/database/userDatabase";
import { getCollection } from "../../infrastructure/mongodb/mongoConnection";
import { UserDocument } from "../../infrastructure/mongodb/userDocument";

export class RepositoryFactory {
    static createRepository(repositoryType: string) {
        switch(repositoryType) {
            case 'User':
                const userCollection = getCollection<UserDocument>('users');
                if(userCollection !== undefined)
                    return new UserRepository(userCollection);
                return;
            // case 'Post':
            //     const postCollection = getCollection<UserDocument>('posts');
            //     if(postCollection !== undefined)    
            //         return new PostRepository(postCollection);
            //     return;
            default:
                return;
        }
    }
}