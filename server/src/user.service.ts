import { User } from "./user";
import { DBService } from "./../database/database";
 
export class UserService {
    users: DBService;
    idCount: number;
 
 
    constructor() {
        this.users = new DBService('clients');
    }
    getUserById(id:number): object{
        const users = this.get()
        console.log(users);
        for(let user of users){
            if(user.id == id){
 
                return user;
 
            }
        }
    }
    getPostsById(id:number): string[]{
        const users = this.get()
        console.log(users);
        for(let user of users){
            if(user.id == id){
 
                return user.myPosts;
 
            }
        }
 
    }
    addPost(post:string, id:number){
 
        return this.users.addPost(post,id);
    }
    addComment(data:object){
        return this.users.addComment(data);
    }
 
    updateData(data:Array<any>){
        return this.users.updatePost(data[0],data[1],data[2]);
    }
    // deleteData(id:number,postIndex:number){
    //     return this.users.delete(id,postIndex);
    // }
 
    get(): User[] {
        return this.users.getData();
    }
 
 
 
}