import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolOneComponent } from './tool-one/tool-one.component';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {
    component:ToolOneComponent,
    path:'tool-one'
  },

  {
    component:ContentComponent,
    path:'content'
  },

  {
    component:HeaderComponent,
    path:'header'
  }

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
