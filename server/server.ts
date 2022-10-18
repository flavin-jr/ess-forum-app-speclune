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
    const users = userService.getUserById(3);
    res.send(users);
});
app.post('/my_posts',(req:express.Request,res:express.Response)=>{
  const data = req.body;
  console.log(data);
  userService.addPost(data[0],data[1]);
  
})

app.get('/posts', (req:express.Request,res:express.Response)=>{
  const users = userService.get();
  res.send(users);
});

app.put('/edit_post', (req:express.Request, res:express.Response)=>{
  const data:Array<any> = req.body;
  userService.updateData(data);

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