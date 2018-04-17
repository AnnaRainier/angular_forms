import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from '../users-service.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { User } from '../models/User';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
user: User
  constructor(private usersService: UsersServiceService, 
    private route: ActivatedRoute,
  private router: Router) { }

  ngOnInit() {
    this.route.paramMap.switchMap((params: ParamMap) => {
      const id = +params.get('id');
      console.log(id);

      return this.usersService.get(id);
    })
    .subscribe((user: User) => 
  this.user = user);
  }


  onFormSave(user) {
    console.log('onFormSave', user);
    this.usersService.update(user)
    .subscribe(() => this.goToUsersList());
  }
  onFormCancel(user){
    this.goToUsersList();
  }

  goToUsersList() {
    this.router.navigate(['../../', 'list'], {relativeTo: this.route})
  }
}
