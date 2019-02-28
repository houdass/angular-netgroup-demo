import { Injectable } from '@angular/core';
import { ServiceB } from './serviceB.service';

@Injectable({
  providedIn: 'root',
  useExisting: ServiceB
})
export class ServiceA {
  num = 0;
  sayHello() {
    console.log(`From ServiceA --> Hello -->`, this.num++);
  }
}
