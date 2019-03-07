import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page404Component } from './page404/page404.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '404',
        component: Page404Component
      },
      {
        path: '**',
        redirectTo: '404'
      }
    ])
  ],
  declarations: [Page404Component],
  exports: [RouterModule]
})
export class WildcardRoutingModule {}
