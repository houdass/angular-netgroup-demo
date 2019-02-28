import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../../models/task.model';
import { TaskService } from '../../../services/task.service';
import { ServiceB } from '../../../services/serviceB.service';

@Component({
  selector: 'app-task-info',
  templateUrl: './task-info.component.html',
  styleUrls: ['./task-info.component.scss']
})
export class TaskInfoComponent implements OnInit {
  @Input() tasks: Array<Task>;
  @Output() deleteAllTasks: EventEmitter<void>;

  constructor(private taskService: TaskService, private serviceB: ServiceB) {
    this.deleteAllTasks = new EventEmitter<void>();
    this.serviceB.sayHello();
  }

  ngOnInit() {}

  deleteAll() {
    this.deleteAllTasks.emit();
  }

  increment() {
    this.taskService.increment('INFO');
  }
}
