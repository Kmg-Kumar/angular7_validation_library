import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidationService } from './services/validation.service';

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
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ValidationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
