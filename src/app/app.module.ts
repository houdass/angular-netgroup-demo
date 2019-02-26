import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { TaskListComponent } from './components/task/task-list/task-list.component';
import { TaskInfoComponent } from './components/task/task-info/task-info.component';
import { HeaderComponent } from './components/header/header.component';
import { DropdownDirective } from './directives/dropdown.directive';

@NgModule({
  declarations: [AppComponent, TaskComponent, TaskListComponent, TaskInfoComponent, HeaderComponent, DropdownDirective],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
