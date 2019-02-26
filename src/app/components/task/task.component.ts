import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  tasks: Array<Task>;

  constructor() {}

  ngOnInit() {
    this.tasks = [
      new Task(0, 'Learn JavaScript', true),
      new Task(1, 'Learn Webpack', false),
      new Task(2, 'Learn Angular', true),
      new Task(3, 'Learn RxJS', false),
      new Task(4, 'Learn TypeScript', false)
    ];
  }

  add(task: Task) {
    this.tasks.push(task);
    // Get a new copy of tasks array (by value)
    this.tasks = this.tasks.slice();
  }

  delete(id: number) {
    const index = this.tasks.findIndex((t: Task) => t.id === id);
    this.tasks.splice(index, 1);
    // Get a new copy of tasks array (by value)
    this.tasks = this.tasks.slice();
  }

  update(task: Task) {
    const index = this.tasks.findIndex((t: Task) => t.id === task.id);
    this.tasks[index] = task;
    // Get a new copy of tasks array (by value)
    this.tasks = this.tasks.slice();
  }

  deleteAll() {
    this.tasks = [];
    // Get a new copy of tasks array (by value)
    this.tasks = this.tasks.slice();
  }
}
