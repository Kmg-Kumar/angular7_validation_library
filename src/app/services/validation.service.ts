import {FormControl} from '@angular/forms';

export class ValidationService {
  public static errorArray;

  static getValidatorErrorMessage(validatorName: string, validatorValue?: any, fieldName?:any) {
    fieldName = fieldName.replace(/\w\S*/g, (txt => txt[0].toUpperCase() + txt.substr(1).toLowerCase()));
    let config = {
      'required': `${fieldName} is Required`,
      'invalidCreditCard': 'Is invalid credit card number',
      'invalidEmailAddress': 'Invalid email address',
      'passwordMismatch': 'Password mismatch. Retry',
      'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
      'minlength': `${fieldName} Minimum length ${validatorValue.requiredLength}`,
      'maxlength': `${fieldName} Maximum length ${validatorValue.requiredLength}`
    };
    if(config[validatorName]){
      return config[validatorName];
    }else{
      return this.getErrorMessage(validatorName);
    }
  }

  public static setErrorMessage(message:any, formCtrl:any){
    this.errorArray = message;
    this.setMess(message,formCtrl);
  }

  public static setMess(message:any,formCtrl:any){
    for (let key in message) {
      let value = message[key];
      let obj = {};    obj[key] = true;
      formCtrl.controls[key].setErrors(obj);
    }
  }

  public static getErrorMessage(key:string){
    return this.errorArray[key];
  }

  static creditCardValidator(control) {
    // Visa, MasterCard, American Express, Diners Club, Discover, JCB
    if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
      return null;
    } else {
      return { 'invalidCreditCard': true };
    }
  }

  static emailValidator(control) {
    // RFC 2822 compliant regex
    if(control.value != null){
      if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
        return null;
      } else {
        return { 'invalidEmailAddress': true };
      }
    }
    return null;
  }

  static passwordValidator(control) {
    // {6,100}           - Assert password is between 6 and 100 characters
    // (?=.*[0-9])       - Assert a string has at least one number
    if(control.value != null){
      if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
        return null;
      } else {
        return { 'invalidPassword': true };
      }
    }
    return null;
  }

  static passwordsMatch(otherControlName : string) {
    let thisControl: FormControl;
    let otherControl: FormControl;

    return function matchOtherValidate (control: FormControl) {

      if (!control.parent) {
        return null;
      }

      // Initializing the validator.
      if (!thisControl) {
        thisControl = control;
        otherControl = control.parent.get(otherControlName) as FormControl;
        if (!otherControl) {
          throw new Error('passwordsMatch(): other control is not found in parent group');
        }
        otherControl.valueChanges.subscribe(() => {
          thisControl.updateValueAndValidity();
        });
      }

      if (!otherControl) {
        return null;
      }

      if (otherControl.value !== thisControl.value) {
        return { 'passwordMismatch': true };
      }
      return null;
    }
  }

}
