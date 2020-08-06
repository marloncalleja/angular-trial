import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialService } from './social.service';
import { SocialCommentsComponent } from './social-comments/social-comments.component';
import { FormsModule } from '@angular/forms';
import { CommentComponent } from './social-comments/comment.component';
import { EventComponent } from './social-comments/event.component';
import { RainbowDirective } from './test-components/rainbow/rainbow.directive';
import { LifecycleComponent } from './test-components/lifecycle/lifecycle.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    SocialCommentsComponent,
    CommentComponent,
    EventComponent,   
    RainbowDirective, LifecycleComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })],
  entryComponents: [CommentComponent, EventComponent],
  providers: [SocialService],
  bootstrap: [AppComponent],
})
export class AppModule {}
