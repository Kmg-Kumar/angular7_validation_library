import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ValidationService } from './../services/validation.service';

@Component({
    selector: 'app-validation',
    templateUrl: './validation.component.html',
    styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {

    @Input() control: FormControl;
    @Input() formControlName;
    field_name;

    constructor() { }

    get errorMessage() {

        for (let propertyName in this.control.errors) {

            if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {

                Object.keys(this.control.parent.controls).forEach((key: string) => {
                    if (this.control === this.control.parent.controls[key])
                    {
                        this.field_name = key;
                    }
                });

                return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName], this.field_name.replace('_',' '));
            }
        }

        return null;
    }


    ngOnInit() {
    }

}
