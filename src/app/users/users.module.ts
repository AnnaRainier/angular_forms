import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersContainerComponent } from './users-container/users-container.component';
import { RouterModule, Route } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component'
import { UsersServiceService } from './users-service.service';
import { UserFormComponent } from './user-form/user-form.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserAddComponent } from './user-add/user-add.component';
import { FormsModule } from '@angular/forms'

/*
const routes: Route[]= [
{path: '', component: UsersContainerComponent, children: [
    {path: '', redirectTo: 'list', pathMatch: 'full'},
    {path: 'edit/:id', component: UserEditComponent},
    {path: 'list', component: UsersListComponent},
    {path: 'list/:id', component: UserDetailsComponent},
    {path: 'details', component: UserDetailsComponent}
]}
    
] 
*/
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([])
  ],
  declarations: [UsersListComponent, UsersContainerComponent, UserDetailsComponent, UserFormComponent, UserEditComponent, UserAddComponent],
  providers: [UsersServiceService]
 // exports: [UsersListComponent]
})
export class UsersModule { }
