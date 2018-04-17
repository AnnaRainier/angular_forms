import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from '../users-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/User';


@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
user: User
  constructor(private usersService: UsersServiceService, 
    private route: ActivatedRoute,
    private router: Router ) { }

  ngOnInit() {
    this.user = new User();
  }

  onFormSave(user) {
    this.user = user;
    this.usersService.addNewUser(user);
    this.goToUsersList();
  }

  onFormCancel() {
    this.goToUsersList();
  }

  goToUsersList() {
    this.router.navigate(['../', 'list'], {relativeTo: this.route})
  }

}
