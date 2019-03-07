import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/*import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';*/

import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { TaskListComponent } from './components/task/task-list/task-list.component';
import { TaskInfoComponent } from './components/task/task-info/task-info.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { UserDetailComponent } from './components/user/user-detail/user-detail.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { Page404Component } from './components/page404/page404.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CustomPipe } from './pipes/custom.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { CamelcaseInterceptor } from './interceptors/camelcase.interceptor';
// import { environment } from '../environments/environment';

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
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
    /*AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule*/
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: CamelcaseInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
