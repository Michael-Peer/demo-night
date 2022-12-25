import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/routing/guards/AuthGuard';
import { IsLoggedInGuard } from './shared/routing/guards/isLoggedinGuard';
import { TodoResolver } from './shared/routing/resolvers/todo-resolver';
import { TodoComponent } from './todo/todo.component';
import { TodosComponent } from './todos/todos.component';

const appRoutes: Routes = [
  {path: '',redirectTo: '/login', pathMatch: 'full'},
  {path: 'todos', component: TodosComponent, canActivate: [AuthGuard]},
  {path: 'add-todo', component: AddTodoComponent, canActivate: [AuthGuard]},
  {path: 'todo/:id', component: TodoComponent, resolve:{
    todo: TodoResolver
  },  canActivate: [AuthGuard]
},
  {path: 'login', component: LoginComponent, canActivate: [IsLoggedInGuard]},
  {path: '**', redirectTo: ''}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
