import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavigationComponent } from './navigation/navigation.component';
import { UsersModule } from './users/users.module';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UsersContainerComponent } from './users/users-container/users-container.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserAddComponent } from './users/user-add/user-add.component';
//import { Route } from '@angular/compiler/src/core';
//import { SecondComponent } from './second/second.component';

const routes: Route[] = [
  {path: '', redirectTo: 'users', pathMatch: 'full'},
  {path: 'users', component: UsersContainerComponent, children:[
    {path: '', redirectTo: 'list', pathMatch: 'full'},
    {path: 'add', component: UserAddComponent},
    {path: 'edit/:id', component: UserEditComponent},
    {path: 'list', component: UsersListComponent},
    {path: 'list/:id', component: UserDetailsComponent},
    {path: 'details', component: UserDetailsComponent}
  ]},
  {path: '**', component: NotFoundComponent} //not found route
  
]

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
