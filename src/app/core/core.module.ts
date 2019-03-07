import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { CommonModule } from '@angular/common';
import { AuthInterceptor } from '../interceptors/auth.interceptor';
import { CamelcaseInterceptor } from '../interceptors/camelcase.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderComponent } from '../components/header/header.component';
import { SidenavComponent } from '../components/sidenav/sidenav.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { environment } from '../../environments/environment';

@NgModule({
  declarations: [HeaderComponent, SidenavComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  exports: [HeaderComponent, SidenavComponent],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: CamelcaseInterceptor, multi: true }
  ]
})
export class CoreModule {}
