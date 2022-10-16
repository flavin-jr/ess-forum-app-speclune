export class User{
    id:number;
    username: string;
    myPosts: Array<string>;
    comments: Array<Array<object>>;



    constructor(user:User){
        this.id = user.id;
        this.username = user.username;
        this.myPosts = user.myPosts;
        this.comments = user.comments;
    }
}