import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female', 'other'];
  signUpForm: FormGroup;  
  forbiddenUserNames = ['chris', 'anna'];

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([]),
    });
    
    /* this.signUpForm.valueChanges.subscribe(
      (value) => console.log(value)
    );*/

    this.signUpForm.statusChanges.subscribe(
      (value) => console.log(value)
    );

    this.signUpForm.setValue({
      'userData': {
        'username': 'Antti',
        'email': 'a@b.com'
      },
      'gender': 'male',
      'hobbies': [],
    });

    this.signUpForm.patchValue({
      'userData': {
        'username': 'Tapani',
      },
    });
  }

  onSubmit() {
    console.log(this.signUpForm);
    // you can give defaultValues for the form as an object for reset()
    this.signUpForm.reset({'userData': {'username': 'Taavi'}, 'gender': 'female'});
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }

  getControls() {
    return (<FormArray>this.signUpForm.get('hobbies')).controls;
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if(this.forbiddenUserNames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true}
    }
    return null;
  }

  forbiddenEmails(ctrl: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (ctrl.value === 'test@test.com') {
          resolve({ 'emailIsForbidden': true });
        }
        else { 
          resolve(null);
        }
      }, 2500);
    });
    return promise;
  }
}
