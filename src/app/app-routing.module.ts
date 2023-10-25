import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolOneComponent } from './tool-one/tool-one.component';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { TooltwoComponent } from './tooltwo/tooltwo.component';
import { QuizGenComponent } from './quiz-gen/quiz-gen.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';



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
  },

  {
    component:TooltwoComponent,
    path:'tooltwo'
  },

  {
    component:QuizGenComponent,
    path:'quiz-gen'
  },

{
  component:SignupComponent,
  path:'signup'
},

{
  component:LoginComponent,
  path:'login'
},


 

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
