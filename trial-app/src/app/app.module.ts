import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialService } from './social.service';
import { SocialCommentsComponent } from './social-comments/social-comments.component';

@NgModule({
  declarations: [AppComponent, SocialCommentsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [SocialService],
  bootstrap: [AppComponent],
})
export class AppModule {}
