import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditpostsComponent } from './editposts/editposts.component';
import { MypostsComponent } from './myposts/myposts.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  { path: 'my_posts', component: MypostsComponent },
  {path: 'edit_post', component: EditpostsComponent},
  { path: 'posts', component: PostsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
