import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MypostsComponent } from './myposts/myposts.component';
import { EditpostsComponent } from './editposts/editposts.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MypostsComponent,
    EditpostsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
