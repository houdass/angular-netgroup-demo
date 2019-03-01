import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
  users: Array<User>;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.users = [
      { id: 0, name: 'Youness' },
      { id: 1, name: 'Mohammed' },
      { id: 2, name: 'Aziz' },
      { id: 3, name: 'Fatima' }
    ];

    const someText = this.route.snapshot.data['someText'];
    console.log('Static Data: ', someText);
    const resolveData = this.route.snapshot.data['resolveData'];
    console.log('Dynamic Data: ', resolveData);
  }
}
