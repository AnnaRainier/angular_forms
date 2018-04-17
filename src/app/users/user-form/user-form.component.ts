import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../models/User';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  @Input() user: User
  @Output() save = new EventEmitter<User>()
  @Output() cancel = new EventEmitter<void>()

  constructor() { }

  onSaveBtnClick() {
    console.log(this.user);
    this.save.emit(this.user);
  }

  onCancelBtnClick() {
    this.cancel.emit();
  }
  

}
