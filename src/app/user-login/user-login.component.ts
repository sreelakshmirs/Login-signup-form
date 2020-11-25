import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  myForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      /**
       * validating username and password 
       * username has  maxLength(25)
       * password has minLength(8) & maxLength(12)
       */
      userName: ['', [Validators.pattern('^[a-zA-Z\\s]+$'), Validators.required, Validators.maxLength(25)],],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12),
      Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')]],
    })
  }
  //for username
  get userName() {
    return this.myForm.get('userName');
  }
  //for password
  get password() {
    return this.myForm.get('password');
  }
  //to display data in console
  displayDetails() {
    console.log(this.myForm.value);
  }
}