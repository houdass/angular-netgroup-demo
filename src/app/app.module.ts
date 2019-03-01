import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { TaskListComponent } from './components/task/task-list/task-list.component';
import { TaskInfoComponent } from './components/task/task-info/task-info.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { LoggerService } from './services/logger.service';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { UserDetailComponent } from './components/user/user-detail/user-detail.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { Page404Component } from './components/page404/page404.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomPipe } from './components/pipes/custom.pipe';
import { FilterPipe } from './components/pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskListComponent,
    TaskInfoComponent,
    HeaderComponent,
    SidenavComponent,
    DropdownDirective,
    UserComponent,
    HomeComponent,
    UserDetailComponent,
    UserListComponent,
    Page404Component,
    CustomPipe,
    FilterPipe
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
