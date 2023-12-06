// programming-form.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-programming-form',
  templateUrl: './programming-form.component.html',
  styleUrls: ['./programming-form.component.css'],
})
export class ProgrammingFormComponent {
  programmingForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.programmingForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      programmingLanguages: this.formBuilder.array([], Validators.required),
      experienceLevel: ['', Validators.required],
      projectDescription: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  get formControls() {
    return this.programmingForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.programmingForm.invalid) {
      return;
    }

    // Form is valid, handle the submission logic here
    const name = this.formControls.name.value;
    const experienceLevel = this.formControls.experienceLevel.value;

    alert(
      `Congratulations ${name}! Your programming skills are impressive. Keep up the great work!`
    );
  }
}
