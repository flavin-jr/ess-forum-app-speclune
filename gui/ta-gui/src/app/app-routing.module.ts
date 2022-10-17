import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditpostsComponent } from './editposts/editposts.component';
import { MypostsComponent } from './myposts/myposts.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  { path: 'my_posts', component: MypostsComponent ,title: "Meus posts"},
  {path: 'edit_post', component: EditpostsComponent,title: "Editar posts"},
  { path: 'posts', component: PostsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
