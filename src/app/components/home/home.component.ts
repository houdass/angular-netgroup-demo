import { Component, OnInit } from '@angular/core';
import { Gender } from '../../models/gender.model';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userForm: FormGroup;
  genders: Array<Gender>;
  defaultGender: Gender;
  users: Array<string>;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.genders = [{ id: 0, label: 'Female' }, { id: 1, label: 'Male' }];
    this.defaultGender = this.genders[1];
    this.users = ['Youness', 'Angular'];

    this.userForm = this.fb.group({
      user: this.fb.group({
        name: this.fb.control('', [Validators.required, this.isUniqueSync.bind(this)]),
        email: this.fb.control('', [Validators.required, Validators.email], [this.isUniqueAsync.bind(this)])
      }),
      gender: this.fb.control(this.defaultGender),
      hobbies: this.fb.array([])
    });
  }

  onSubmit() {
    console.log(this.userForm.value);
  }

  get name() {
    return this.userForm.get('user.name');
  }

  get email() {
    return this.userForm.get('user.email');
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (this.userForm.get('hobbies') as FormArray).push(control);
  }

  isUniqueSync(control: FormControl): { [s: string]: boolean } {
    if (this.users.find((user: string) => user === control.value)) {
      return { exists: true };
    }
    return null;
  }

  isUniqueAsync(control: FormControl): Promise<any> {
    return new Promise<any>(resolve => {
      setTimeout(() => {
        if (control.value === 'youness@email.com') {
          resolve({ exists: true });
        } else {
          resolve(null);
        }
      }, 1000);
    });
  }
}
