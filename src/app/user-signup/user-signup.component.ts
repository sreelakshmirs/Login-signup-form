import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  myForm: FormGroup;
  /* for month*/
  months = [
    { value: 'Jan', selectedValue: 'Jan' }, { value: 'Feb', selectedValue: 'Feb' }, { value: 'Mar', selectedValue: 'Mar' },
    { value: 'Apr', selectedValue: 'Apr' }, { value: 'May', selectedValue: 'May' }, { value: 'Jun', selectedValue: 'Jun' },
    { value: 'Jul', selectedValue: 'Jul' }, { value: 'Aug', selectedValue: 'Aug' }, { value: 'Sep', selectedValue: 'Sep' },
    { value: 'Oct', selectedValue: 'Oct' }, { value: 'Nov', selectedValue: 'Nov' }, { value: 'Dec', selectedValue: 'Dec' },
  ]
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.myForm = this.fb.group({
      /* validating name field :It can't be empty & maxLength(25)*/
      name: ['', [Validators.pattern('^[a-zA-Z\\s]+$'), Validators.required, Validators.maxLength(25)],],
      /*validating email field :It can't be empty*/
      email: ['', [Validators.required, Validators.email]],
      /* validating phone field :It can't be empty ,it can be only numbers & must be  10 digits*/
      phone: ['', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.maxLength(10), Validators.minLength(10)
      ]],
      /* validating address field :It can't be empty*/
      address: ['', [Validators.required]],
      /* validating day, month, year field :It can't be empty*/
      day: ['', [Validators.required]],
      month: ['', [Validators.required]],
      year: ['', [Validators.required]],
      /* validating gender field :It can't be empty*/
      gender: ['', [Validators.required]],
      /*validating password field :It can't be empty,must be minLength(8),maxLength(12), alpha numeric*/
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12),
      Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')]],
      /* validating conform password field :It can't be empty, must be minLength(8),maxLength(12),
       alpha numeric,checks with password */
      conformPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12),
      Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'), this.passwordValidate]],
      eligible: [false, [Validators.requiredTrue]]

    })
    this.myForm.valueChanges.subscribe(console.log);

  }
  /* each method is used for corresponding fields*/
  get name() {
    return this.myForm.get('name');
  }
  get email() {
    return this.myForm.get('email');
  }
  get address() {
    return this.myForm.get('address');
  }
  get phone() {
    return this.myForm.get('phone');
  }
  get day() {
    return this.myForm.get('day');
  }
  get month() {
    return this.myForm.get('month');
  }
  get year() {
    return this.myForm.get('year');
  }
  get gender() {
    return this.myForm.get('gender');
  }
  get eligible() {
    return this.myForm.get('eligible');
  }
  get password() {
    return this.myForm.get('password');
  }
  get conformPassword() {
    return this.myForm.get('conformPassword');
  }
  //Display data in console
  displayDetails() {
    console.log(this.myForm.value);
  }
  //To validate confirm password
  passwordValidate(control) {
    if (control.value != null) {
      var confirmPass = control.value;
      var passwd = control.root.get('password')

      if (passwd) {
        var password = passwd.value;
        if (confirmPass != "" && password != "") {
          if (confirmPass != password) {
            return {
              passwordValidity: true
            }
          }
          else {
            return null;
          }
        }
      }
    }
  }
}
