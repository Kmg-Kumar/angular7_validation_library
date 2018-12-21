import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidationService } from './../services/validation.service';

export class RegisterData {
  first_name: string;
  last_name: string;
  password: string;
  confirm_password: string;
  email: string;
  phone_number: string;
}

@Component({
  selector: 'app-validation-form',
  templateUrl: './validation-form.component.html',
  styleUrls: ['./validation-form.component.css']
})

export class ValidationFormComponent implements OnInit {

  // Class Initilize
  RegisterData = new RegisterData();

  // For Initilization
  registerForm;

  constructor(
      private formBuilder: FormBuilder,
      // private  Validators: Validators
  ) {
    // Client Side Validation
    this.registerForm = this.formBuilder.group ({
      'first_name': ['', [Validators.required, Validators.maxLength(30)]],
      'last_name' : ['', [Validators.required, Validators.maxLength(30)]],
      'password'  : ['', [Validators.required]],
      'confirm_password' : ['', [Validators.required]],
      'email' : ['', [Validators.required]],
      'phone_number' : ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  Registration() {
    console.log(this.RegisterData);
  }

}
