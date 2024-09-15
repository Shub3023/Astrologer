import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonLabel,
  IonButtons,
  IonImg,
} from '@ionic/angular/standalone';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonLabel,
    IonButton,
    IonButtons,
    IonImg,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    CommonModule,
    NgxMatTimepickerModule,
    MatIconModule,
    RouterLink
  ],
})
export class SignUpPage implements OnInit {
  astologer: boolean = true;
  user: boolean = true;

  signUpForm!: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit() {
    this.signUpForm = this.fb.group({
      account: ['', [Validators.required]],
      // firstName: ['', [Validators.pattern(/\s/), Validators.required], ],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      date: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      time: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      email: ['', [Validators.required, Validators.email, Validators.email]],
      specialization: ['', [Validators.required]],
      language: ['', [Validators.required]],
      experience: ['', [Validators.required]],
    });
  }

  onSubmit() {
    localStorage.setItem(
      'signUpFormData',
      JSON.stringify(this.signUpForm.value)
    );

    if (this.signUpForm.invalid) {
      this.signUpForm.markAllAsTouched();
      return;
    }
  }
  get errorControl() {
    return this.signUpForm.controls;
  }

  onUser() {
    console.log(this.signUpForm.value.account);
    console.log('astrologer value' + this.astologer);

    if (this.signUpForm.value.account === 'User') {
      this.astologer = false;
      this.user = true;
      console.log('Inside astrologer value' + this.astologer);
    } else {
      this.user = false;
      this.astologer = true;
    }
  }
}
