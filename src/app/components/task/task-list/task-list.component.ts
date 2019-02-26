import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Task } from '../../../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  @Input() tasks: Array<Task>;
  @Output() add: EventEmitter<Task>;
  @Output() update: EventEmitter<Task>;
  @Output() delete: EventEmitter<number>;

  isEdit: boolean;
  newTask: string;
  selectedTask: Task;
  index: number;

  constructor() {
    this.index = 5;
    this.isEdit = false;
    this.add = new EventEmitter<Task>();
    this.delete = new EventEmitter<number>();
    this.update = new EventEmitter<Task>();
  }

  addTask(): void {
    const task = new Task(this.index++, this.newTask);
    this.add.emit(task);
  }

  deleteTask(id: number): void {
    this.delete.emit(id);
  }

  updateTask(task: Task): void {
    this.isEdit = true;
    this.newTask = task.title;
    this.selectedTask = task;
  }

  confirmTask(newTaskInput: string): void {
    this.selectedTask.title = newTaskInput;
    this.update.emit(this.selectedTask);
    this.isEdit = false;
    this.newTask = '';
  }
}
