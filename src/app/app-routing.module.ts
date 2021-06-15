import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCreationComponent } from './pages/user-creation/user-creation.component';
import { UserEditComponent } from './pages/user-edit/user-edit.component';
import { UserListComponent } from './pages/user-list/user-list.component';

const routes: Routes = [
  {
    path: "userList",
    component: UserListComponent,
  },
  {
    path: "createUser",
    component: UserCreationComponent,
  },
  {
    path: "editUser/:id",
    component: UserEditComponent,
  },
  { path: "**", redirectTo: "userList" },
  {
    path: "",
    redirectTo: "userList",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
