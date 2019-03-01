import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('name')
  name: ElementRef;
  subscription: Subscription;
  constructor(private userService: UserService) {}

  ngOnInit() {
    // const source = interval(1000);
    /*const source = Observable.create(observer => {
      let i = 0;
      const interval = setInterval(() => {
        observer.next(i);
        i++;
        if (i === 3) {
          // observer.error('Something went wrong!');
          observer.complete();
        }
      }, 1000);
    });

    source.subscribe(
      value => console.log('Next : ', value),
      err => console.log('Error : ', err),
      () => console.log('Complete')
    );*/
    /* fromEvent(this.name.nativeElement, 'keyup')
      .pipe(
        map((event: any) => event.target.value),
        filter((text: string) => text.length > 2),
        debounceTime(1000),
        distinctUntilChanged()
      )
      .subscribe(text => console.log('API call', text)); */

    // this.userService.getUsersObservable().subscribe(); // LAZY
    // this.userService.getUsersPromise(); // EAGER

    this.userService.numberSubject.subscribe(value => console.log('Observer 1 ', value));
    this.userService.numberSubject.next(2);
    // this.userService.numberSubject.subscribe(value => console.log('Observer 2 ', value));

    this.userService.numberSubject.next(3);
    this.userService.numberSubject.next(4);
  }
}
