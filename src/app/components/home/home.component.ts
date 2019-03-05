import { Component, OnInit, ViewChild } from '@angular/core';
import { Gender } from '../../models/gender.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  genders: Array<Gender>;
  defaultGender: Gender;

  constructor() {}

  ngOnInit() {
    this.genders = [{ id: 0, label: 'Female' }, { id: 1, label: 'Male' }];
    this.defaultGender = this.genders[1];
  }

  onSubmit() {
    console.log(this.form.value);
  }

  setForm() {
    /* this.form.setValue({
      user: {
        name: 'Youness',
        email: 'youness@gmail.com'
      },
      gender: this.genders[1]
    }); */
    this.form.form.patchValue({ user: { name: 'Angular ' } });
  }
}
