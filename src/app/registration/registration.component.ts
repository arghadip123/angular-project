

import { CommonModule } from '@angular/common';
import { Component,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      initial: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      postalAddress: ['', Validators.required],
      policestation: ['', Validators.required],
      mobilenumber: ['', [Validators.required, Validators.minLength(10)]],
      pincode: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      // Form is valid, proceed with submission
      console.log(this.registrationForm.value);
    } else {
      // Form is invalid, handle accordingly
      console.log("Form is invalid");
    }
  }
}

