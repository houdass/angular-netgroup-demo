import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { TaskListComponent } from './components/task/task-list/task-list.component';
import { TaskInfoComponent } from './components/task/task-info/task-info.component';
import { HeaderComponent } from './components/header/header.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { LoggerService } from './services/logger.service';
/* import { TaskService } from './services/task.service';
import { FakeTaskService } from './services/fake-task.service'; */

@NgModule({
  declarations: [AppComponent, TaskComponent, TaskListComponent, TaskInfoComponent, HeaderComponent, DropdownDirective],
  imports: [BrowserModule, FormsModule],
  providers: [
    // useClass
    /* { provide: TaskService, useClass: FakeTaskService } */
    // useValue
    /* { provide: 'IS_PROD', useValue: false }, */
    // useFactory
    /* {
      provide: TaskService,
      useFactory: (IS_PROD, loggerService) =>
        IS_PROD ? new TaskService(loggerService) : new FakeTaskService(loggerService),
      deps: ['IS_PROD', LoggerService]
    }, */
    // TaskService,
    LoggerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
