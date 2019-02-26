import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../../models/task.model';

@Component({
  selector: 'app-task-info',
  templateUrl: './task-info.component.html',
  styleUrls: ['./task-info.component.scss']
})
export class TaskInfoComponent implements OnInit {
  @Input() tasks: Array<Task>;
  @Output() deleteAllTasks: EventEmitter<void>;

  constructor() {
    this.deleteAllTasks = new EventEmitter<void>();
  }

  ngOnInit() {}

  deleteAll() {
    this.deleteAllTasks.emit();
  }
}
