import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ValidationModule } from './validation/validation.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValidationFormComponent } from './validation-form/validation-form.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ValidationComponent } from './validation/validation.component';


@NgModule({
  declarations: [
    AppComponent,
    ValidationFormComponent,
    HomepageComponent,
    ValidationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
