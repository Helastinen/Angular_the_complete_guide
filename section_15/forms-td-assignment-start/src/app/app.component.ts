import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('form') form: NgForm;
  submitted = false;
  
  signUpValues = {
    email: '',
    subscription: '',
    password: ''
  }
  
  onSubmit() {
    this.submitted = true;
    this.signUpValues.email = this.form.value.mail;
    this.signUpValues.subscription = this.form.value.subscription;
    this.signUpValues.password = this.form.value.password;
    
    console.log("form:", this.form);
    console.log("form value:", this.form.value);
    console.log("signUpValues: ", this.signUpValues);
    this.form.reset();
  }
}
