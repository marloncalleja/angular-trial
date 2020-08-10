import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PwaOneComponent } from './pwa/pwa-one.component';
import { PwaTwoComponent } from './pwa/pwa-two.component';
import { PwaThreeComponent } from './pwa/pwa-three.component';
import { SocialCommentsComponent } from './social-comments/social-comments.component';
import { PageNotFoundComponent } from './page-not-found-component';


const routes: Routes = [
  { path: 'welcome', component: SocialCommentsComponent },
  { path: "pwa-one", component: PwaOneComponent },
  { path: "pwa-two", component: PwaTwoComponent },
  { path: "pwa-three", component: PwaThreeComponent },  
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
