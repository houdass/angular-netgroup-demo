import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { User } from '../../../models/user.model';
import { CanComponentDeactivate } from '../../../guards/can-deactivate-user.guard';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit, CanComponentDeactivate {
  users: Array<User>;
  id: number;
  constructor() {}

  ngOnInit() {
    this.users = [
      { id: 0, name: 'Youness' },
      { id: 1, name: 'Mohammed' },
      { id: 2, name: 'Aziz' },
      { id: 3, name: 'Fatima' }
    ];
    this.id = 4;
  }

  addUser() {
    this.users.push({ id: ++this.id, name: 'Framework' });
    // this.users = [...this.users, { id: ++this.id, name: 'Framework' }];
  }

  canDeactivate() {
    console.log('Can Deactivate Guard');
    return confirm('Discard changes?');
  }
}
