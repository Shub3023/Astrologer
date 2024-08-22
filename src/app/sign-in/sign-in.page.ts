import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonLabel, IonButtons, IonImg } from '@ionic/angular/standalone';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingPopUpPage } from '../loading-pop-up/loading-pop-up.page';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { SuccessPopUpPage } from '../success-pop-up/success-pop-up.page';
import { CommonHttpEndpointsService } from '../common-http-endpoints.service';
import { DataService } from '../data.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonButton,
    IonButtons, IonImg, MatFormFieldModule, MatSelectModule, MatInputModule,
    MatDatepickerModule, MatNativeDateModule, ReactiveFormsModule, CommonModule, NgxMatTimepickerModule, MatOptionModule, MatButtonModule,
    MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
})
export class SignInPage implements OnInit {

  signInForm!: FormGroup;
  signInData: any;

  constructor(private router: Router, private fb: FormBuilder, private dialog: MatDialog, public commonService:CommonHttpEndpointsService,public data:DataService) { }

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    });
    console.log('Form initialized:', this.signInForm.value);
  }
  openSignUpPage() {

    if(this.signInForm.value.mobileNumber==="1234567890"){

    }
    this.router.navigate(['/sign-up']);
  }
  onSignIn(phone:string) {
    this.data.signInData(this.signInForm.get('mobileNumber')?.value);

    console.log(phone)
    if (this.signInForm.invalid) {
      this.signInForm.markAllAsTouched();
      return;
    }
    // const signInData = localStorage.getItem('signUpFormData');
    // if (signInData) {
      // const signInDataObject = JSON.parse(signInData)
      // console.log("Local" + signInDataObject.phone);
      // if (this.signInForm.value.mobileNumber === signInDataObject.phone) {
        // alert("Login Successfully.")
      // }
      // else {
        // alert("Invalid User!!!")
      // }
    // }
    // this.signInData = { ...this.signInForm.value };
    const data={
      phone:phone
    }
    this.commonService.postApi(data).subscribe((res=>{
      console.log("api data");
      console.log(res);
      
    }))
    let dialogRef = this.dialog.open(LoadingPopUpPage, {
      height: '80px',
      width: '50px',
    });

    setTimeout(() => {
      dialogRef.close();
      let dialogRef2 = this.dialog.open(SuccessPopUpPage, {
        height: '150px',
        width: '300px',
      });
      setTimeout(() => {
        dialogRef2.close();
        this.openOtp();
      }, 1000);
    }, 1000);
  }
  openOtp() {
    this.router.navigate(['/verify-otp']);
  }
  homePage() {
    this.router.navigate(['/home']);
  }
}


