import { Injectable } from '@angular/core';
import { USERS } from './users-mock';
import { Observable} from 'rxjs/Observable';
import { User } from './models/User';
import { of } from 'rxjs/observable/of';


@Injectable()
export class UsersServiceService {
users = USERS
  constructor() { }

  getList(): Observable<User[]> {
    return of(this.users);
  }


  get(id: number): Observable<User> {
    const user = this.users.find((user) => user.id === id);
    return of(Object.assign({},user));
  }

  update(user: User): Observable<User> {
     this.users = this.users.map((savedUser) => 
     savedUser.id === user.id? user : savedUser);

     return of(user)
  }

  addNewUser(user: User): Observable<User>{
    user.id = Date.now();
    this.users.push(user);
    return of(user);
  }
}
