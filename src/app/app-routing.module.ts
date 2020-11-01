import { ErrorComponent } from './error/error.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListTodosComponent } from './list-todos/list-todos.component';

//Defining Welcome Route and Login Route
const routes: Routes = [
  { path:'', component: LoginComponent},
  { path:'welcome/:username', component: WelcomeComponent},
  { path:'login', component: LoginComponent},
  { path:'todos', component: ListTodosComponent},
  { path:'**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
