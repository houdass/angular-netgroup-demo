/* import * as firebase from 'firebase';
import { environment } from '../environments/environment'; */
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // firebase.initializeApp(environment.firebase);
  }
}
