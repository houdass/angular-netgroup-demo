import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from '../../services/employee.service';
import { User } from '../../models/user.model';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
  users$: Observable<Array<User>>;
  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.users$ = this.employeeService.getEmployees();
  }

  signIn() {
    this.employeeService.signInUser('houd.youness@gmail.com', '123456');
  }

  signOut() {
    this.employeeService.signOut();
  }

  addEmployee() {
    // this.employeeService.addEmployee().subscribe();
    this.employeeService.addEmployee();
  }
}
