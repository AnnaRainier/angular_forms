import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from '../users-service.service';
import { Observable} from 'rxjs/Observable';
import { User } from '../models/User';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users$: Observable<User[]>

  constructor(private usersService: UsersServiceService) { }

  ngOnInit() {
    this.users$ = this.usersService.getList();
  }

}
