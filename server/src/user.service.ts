import { User } from "./user";
import { DBService } from "./../database/database";

export class UserService {
    users: DBService;
    idCount: number;

    // Construtor da classe, carrega o DB
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
    addPost(post:string, id:number):User[]{
        const user:any = this.get().find(({id}:any)=> user.id == id);
        this.users.add(user);
        return this.get();
    }
    getCommentsById(id:number): string[]{
        return
    }

   
    deleteData(index:number){
        return this.users.delete(index);
    }
    addData(user:User){
        return this.users.add(user);
    }
    get(): User[] {
        return this.users.getData();
    }


   
}