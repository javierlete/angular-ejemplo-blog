import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { AppRoutingModule } from './app-routing.module';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post/post.component';
import { CommentComponent } from './comment/comment.component';
import { HttpClientModule }    from '@angular/common/http';
import { CommentListComponent } from './comment-list/comment-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserListComponent,
    PostListComponent,
    PostComponent,
    CommentComponent,
    CommentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
