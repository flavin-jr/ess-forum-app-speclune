export class User {
    id: number;
    username: string;
    myPosts: Array<string>;
    myComments: Array<string>;

    constructor(user:User) {
        this.id = user.id;
        this.username = user.username;
        this.myPosts = user.myPosts;
        this.myComments = user.myComments;
    }

}

