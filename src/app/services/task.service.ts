import { Task } from '../models/task.model';
import { LoggerService } from './logger.service';
import { Injectable } from '@angular/core';
import { FakeTaskService } from './fake-task.service';

const IS_PROD = false;
@Injectable({
  providedIn: 'root',
  useFactory: loggerService => (IS_PROD ? new TaskService(loggerService) : new FakeTaskService(loggerService)),
  deps: [LoggerService]
})
export class TaskService {
  constructor(private loggerService: LoggerService) {}

  num = 0;

  getTasks(): Array<Task> {
    this.loggerService.log('GET TASKS');
    return [
      new Task(0, 'Learn JavaScript', true),
      new Task(1, 'Learn Webpack', false),
      new Task(2, 'Learn Angular', true),
      new Task(3, 'Learn RxJS', false),
      new Task(4, 'Learn TypeScript', false)
    ];
  }

  increment(from: string) {
    console.log(from, ' : ', this.num++);
  }
}
