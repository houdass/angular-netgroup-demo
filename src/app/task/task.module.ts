import { TaskInfoComponent } from './task-info/task-info.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskComponent } from './task.component';
import { CommonModule } from '@angular/common';
import { TaskRoutingModule } from './task-routing.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, FormsModule, TaskRoutingModule, SharedModule],
  declarations: [TaskComponent, TaskListComponent, TaskInfoComponent]
})
export class TaskModule {}
