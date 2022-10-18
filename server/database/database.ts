import { User } from "../src/user";
 
var fs = require("fs");
 
export class DBService {
    name: string;
    path: string;
    data: any;
 
    constructor(name: string) {
        this.name = name;
        this.path = __dirname + '/' + name + '.json';
        this.read();
    }
 
    read() {
        this.data = JSON.parse(
            fs.readFileSync(this.path, "utf8", (err: any) => {
                if (err) throw err;
            })
        );
    }
 
    write() {
        fs.writeFileSync(this.path, JSON.stringify(this.data), (err: any) => {
            if (err) throw err;
        });
    }
 
    getData() {
        return this.data[this.name];
    }
    addPost(post: string, id: number) {
        var indice: number = -1;
        const users: User[] = this.getData();
        const userChange = users.find((value: User,index:number) => {
            if (value.id === id) {
                indice = index;
            }
        });
        this.data[this.name][indice].myPosts.push(post);
        this.write();
    }   
    add(data: any) {
        this.data[this.name].push(data);
        this.write();
    }
 
    delete(id: number,postIndex:number) {
        var indice: number = -1;
        const users: User[] = this.getData()
        const userDelete = users.find(function (value: User, index: number) {
            if (value.id === id) {
                indice = index;
                console.log(`Index do usuario master no db: ${indice}`);
            }
        });
 
        this.data[this.name][indice].myPosts.splice(postIndex,1);
 
        this.write();
    }
 
    updatePost(post: string, id: number, index: number) {
 
        var indice: number = -1;
        const users: User[] = this.getData()
        const userDelete = users.find((value: User, index: number) => {
            if (value.id === id) {
                indice = index;
                console.log(`Index do usuario master no db: ${indice}`);
            }
        });
 
        this.data[this.name][indice].myPosts[index] = post;
        this.write();
    }
    addComment(data:any){
        var indiceUser:number = -1;
        var indice:number =-1;
        const users: User[] = this.getData();
        for(let user in users){
            if(users[user].id === data.id){
                indiceUser = parseInt(user);
 
                for(let i in users[user].myPosts){
                    if(users[user].myPosts[i] === data.post){
                        indice = parseInt(i);
                    }
                }
            }
        }
        console.log
        this.data[this.name][indiceUser].comments[indice].push({id:data.idSender,comment:data.comment});
        this.write();
    }
}
 
exports.DBService = DBService;