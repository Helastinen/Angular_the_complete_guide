import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  projectForm: FormGroup;
  projectStatuses = ['Stable', 'Critical', 'Finished'];

  ngOnInit() {
    this.projectForm = new FormGroup({
      projectName: new FormControl(
        null,
        [Validators.required, CustomValidators.invalidName.bind(this)],
        CustomValidators.asyncInvalidName.bind(this)),
      email: new FormControl(null, [Validators.required, Validators.email]),
      status: new FormControl('Critical'),
    });
  }

  onCreateProject() {
    console.log(this.projectForm);
    console.log("submitted values", this.projectForm.value);
    this.projectForm.reset();
  }
}
