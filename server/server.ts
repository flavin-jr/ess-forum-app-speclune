import express = require('express');
import bodyParser = require("body-parser");
import { User } from './src/user';
import { UserService } from './src/user.service';


var app = express();
var cors = require('cors')
var allowCrossDomain = function(req: any, res: any, next: any) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
}
app.use(cors());

app.use(bodyParser.json());
var userService: UserService = new UserService();

app.get('/my_posts', (req:express.Request,res:express.Response)=>{
    const users = userService.getUserById(3);
    res.send(users);
});
app.post('/my_posts',(req:express.Request,res:express.Response)=>{
  const user = req.body;
  userService.deleteData(2);
  userService.addData(user);
  console.log(req.body);
  // const user = userService.addPost(myPosts.post,myPosts.id);
  // console.log(user);
  // res.send(user);
})
var server = app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

function closeServer(): void {
  server.close();
}

export { app, server, closeServer }