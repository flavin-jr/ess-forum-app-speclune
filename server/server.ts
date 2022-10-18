import express = require('express');
import bodyParser = require("body-parser");
import { User } from './src/user';
import { UserService } from './src/user.service';
 
 
var app = express();
var cors = require('cors')
 
app.use(cors());
 
app.use(bodyParser.json());
var userService: UserService = new UserService();
app.get('/', (req:express.Request,res:express.Response)=>{
  const users = userService.get();
  res.send(users);
});
app.get('/my_posts', (req:express.Request,res:express.Response)=>{
  try{  
  const users = userService.getUserById(3);
    if(typeof users === 'object'){
    res.status(201).send(users);
    }
    else{
      res.status(403).send({msg : 'cliente nao encontrado'});
    }
  } catch (err){
    const {msg} = err;
    res.status(400).send({msg});
  }
});
app.post('/my_posts',(req:express.Request,res:express.Response)=>{
  
  try{
    const data = req.body;
    const [post,id] = data;
    userService.addPost(post,id);
    res.status(201).send({msg:'posta adicionado com sucesso'});
  } catch(err){
    const {msg} = err;
    res.status(400).send({msg});
  }
 
})
app.put('/edit_post', (req:express.Request, res:express.Response)=>{
  try{
    const data:Array<any> = req.body;
    userService.updateData(data);
    res.status(201).send({msg:'Post editado com sucesso'})
  }catch(err){
    const {msg} = err;
    res.status(400).send({msg});
  }
 
 
});
app.get('/posts', (req:express.Request,res:express.Response)=>{
  const users = userService.get();
  res.send(users);
});
app.post('/posts', (req:express.Request,res:express.Response)=>{
 
  const data = req.body;
  console.log(data);
  userService.addComment(data);
});

var server = app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
// app.delete('/my_posts/:id',(req:express.Request,res:express.Response)=>{
//   const id = req.params.id;
//   const index = 0;
//   console.log(id,index);
//   userService.deleteData(id,index);
 
// })
function closeServer(): void {
  server.close();
}
 
export { app, server, closeServer }