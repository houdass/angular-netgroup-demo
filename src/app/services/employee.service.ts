import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  // url: string;
  token: string;
  authState: any = null;

  /*constructor(private httpClient: HttpClient) {
    this.url = 'https://angular-project-2ea28.firebaseio.com/employees.json';
  }*/

  constructor(private afDb: AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe((auth: any) => {
      this.authState = auth;
    });
  }

  getEmployees(): Observable<any> {
    // return this.httpClient.get(this.url);
    return this.afDb
      .list('/employees')
      .snapshotChanges()
      .pipe(map((changes: any) => changes.map((c: any) => ({ key: c.payload.key, ...c.payload.val() }))));
  }

  addEmployee(): any {
    // return this.httpClient.post(this.url, { id: Math.random(), name: Math.random() });
    return this.afDb.list('/employees').push({ id: Math.random(), name: Math.random() });
  }

  getToken() {
    firebase
      .auth()
      .currentUser.getIdToken()
      .then((token: string) => (this.token = token));
    return this.token;
  }

  /*signUpUser(email: string, password: string) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => console.log(error));
  }*/

  signInUser(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password).then((credential: any) => {
      console.log(credential.user);
    });
    /*firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        firebase
          .auth()
          .currentUser.getIdToken()
          .then((token: string) => (this.token = token));
      })
      .catch(error => console.log(error));*/
  }

  signOut() {
    /*firebase.auth().signOut();
    this.token = null;*/
    this.afAuth.auth.signOut();
  }

  isAuthenticated() {
    // return !!this.token;
    return !!this.authState;
  }
}
