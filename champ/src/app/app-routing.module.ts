import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ItemComponent } from './item/item.component';
import { LandingPageComponent } from './landing-page/landing-page.component';


const routes: Routes = [
  {
    path: "", component: HomePageComponent,


  },
  
  {
    path: "landingPage", component: LandingPageComponent,
    children:[{​​​​​​path:":id",component:ItemComponent}​​​​​​]
    
    

  },
  {
  path:"Display-Page/:id ", component: DisplayComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
