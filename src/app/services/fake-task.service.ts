import { Task } from '../models/task.model';
import { LoggerService } from './logger.service';
import { Injectable } from '@angular/core';

@Injectable()
export class FakeTaskService {
  constructor(private loggerService: LoggerService) {}

  num = 0;

  getTasks(): Array<Task> {
    this.loggerService.log('GET FAKE TASKS');
    return [
      new Task(0, 'Fake Learn JavaScript', true),
      new Task(1, 'Fake Learn Webpack', false),
      new Task(2, 'Fake Learn Angular', true),
      new Task(3, 'Fake Learn RxJS', false),
      new Task(4, 'Fake Learn TypeScript', false)
    ];
  }

  increment(from: string) {
    console.log(from, ' : ', this.num++);
  }
}
