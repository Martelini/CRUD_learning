export class Post {
    postId: string;
    userId: string;
    postMessage: string;
    postCreationTime: Date;

    constructor(postId: string, userId: string, postMessage: string, postCreationTime: Date) {
        this.postId = postId;
        this.userId = userId;
        this.postMessage = postMessage;
        this.postCreationTime = postCreationTime;
    }
}