import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialService } from './social.service';
import {
  SocialCommentsComponent,
  CommentComponent,
  EventComponent,
} from './social-comments/social-comments.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SocialCommentsComponent,
    CommentComponent,
    EventComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [SocialService],
  bootstrap: [AppComponent],
})
export class AppModule {}
