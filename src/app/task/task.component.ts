import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  tasks: Array<Task>;

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
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
