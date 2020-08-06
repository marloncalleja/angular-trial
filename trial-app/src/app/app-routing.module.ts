import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PwaOneComponent } from './pwa/pwa-one.component';
import { PwaTwoComponent } from './pwa/pwa-two.component';


const routes: Routes = [
  { path: "pwa-one", component: PwaOneComponent },
  { path: "pwa-two", component: PwaTwoComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
