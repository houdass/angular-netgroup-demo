import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceB {
  num = 0;
  sayHello() {
    console.log(`From ServiceB --> Hello -->`, this.num++);
  }
}
