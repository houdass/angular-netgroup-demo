import { NgModule } from '@angular/core';

import { TaskComponent } from './components/task/task.component';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component';
import { UserDetailComponent } from './components/user/user-detail/user-detail.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { Page404Component } from './components/page404/page404.component';
import { CanActivateUserGuard } from './guards/can-activate-user.guard';
import { CanActivateChildUserGuard } from './guards/can-activate-child-user.guard';
import { CanDeactivateUserGuard } from './guards/can-deactivate-user.guard';
import { UserResolver } from './components/user/user-resolver.service';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'task',
    component: TaskComponent
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate: [CanActivateUserGuard],
    canActivateChild: [CanActivateChildUserGuard],
    data: { someText: 'Youness' },
    resolve: { resolveData: UserResolver },
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: UserListComponent,
        canDeactivate: [CanDeactivateUserGuard]
      },
      {
        path: ':id/detail',
        component: UserDetailComponent
      }
    ]
  },
  {
    path: '404',
    component: Page404Component
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
