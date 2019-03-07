import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { WildcardRoutingModule } from './wildcard-routing/wildcard-routing.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, CoreModule, ReactiveFormsModule, HttpClientModule, WildcardRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
