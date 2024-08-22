import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonLabel, IonButtons, IonImg } from '@ionic/angular/standalone';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms'; 
import {FormControl} from '@angular/forms';
import { WaitPopUpPage } from '../wait-pop-up/wait-pop-up.page';
import { MatDialog } from '@angular/material/dialog';
import { SignInPage } from '../sign-in/sign-in.page';
import { DataService } from '../data.service';
import { CommonHttpEndpointsService } from '../common-http-endpoints.service';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.page.html',
  styleUrls: ['./verify-otp.page.scss'],
  standalone: true,
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,IonLabel,IonButton,
    IonButtons,IonImg, MatFormFieldModule,MatSelectModule,MatInputModule,
    MatDatepickerModule,MatNativeDateModule,ReactiveFormsModule,CommonModule,NgxMatTimepickerModule,MatIconModule],
})
export class VerifyOtpPage implements OnInit {

  constructor(private fb:FormBuilder,private dialog:MatDialog,private router:Router,public data:DataService,public commonService:CommonHttpEndpointsService) {
    this.inputMap = new Map<string, ElementRef>();
  }

  isButtonDisabled: boolean = true;
  time: number = 60;
  display: any;
  interval: any;
  hide:boolean=true;
 

 
  ngOnInit():void {
    this.startTimer();

    this.otpForm = this.fb.group({
      num1: ['', ],
      num2: ['', ],
      num3: ['', ],
      num4: ['', ],

    });
    console.log(this.data.mobile)
  }

  startTimer() {

    // let dialogRef = this.dialog.open(WaitPopUpPage, {
    //   height: '80px',
    //   width: '50px'
    // });
    this.isButtonDisabled = true;
    this.time = 60;
    this.display = this.time;
    this.hide=true;


    this.interval = setInterval(() => {
      if (this.time > 0) {
        this.time--;
        this.display = this.time;
      }

      if (this.time === 0) {
        this.isButtonDisabled = false;
        clearInterval(this.interval);
        this.hide=false;
      }
    }, 1000);
  }

  onButtonClick() {
    this.startTimer();
    this.hide=true;

  }
  @ViewChild('input1') input1!: ElementRef;
  @ViewChild('input2') input2!: ElementRef;
  @ViewChild('input3') input3!: ElementRef;
  @ViewChild('input4') input4!: ElementRef;

  inputMap: Map<string, ElementRef>;

  

  ngAfterViewInit() {
    this.inputMap.set('input1', this.input1);
    this.inputMap.set('input2', this.input2);
    this.inputMap.set('input3', this.input3);
    this.inputMap.set('input4', this.input4);
  }

  moveToNext(event: KeyboardEvent, nextInputId: string | null) {
    const target = event.target as HTMLInputElement;
    if (target.value.length === 1 && nextInputId) {
      const nextInput = this.inputMap.get(nextInputId);
      if (nextInput) {
        nextInput.nativeElement.focus();
      }
    }
  }

  otpForm!:FormGroup
  onSubmit(){
    // alert("hello")
    console.log(this.otpForm.value)
    if(this.otpForm.value.num1=='1' && this.otpForm.value.num2=='2' && this.otpForm.value.num3=='3' && this.otpForm.value.num4=='4' ){
      alert("Login successfully.")
    }
    else{
      alert("Invalid OTP!!!");
      
    }
  }
  submitOtp() {
    const otp=this.otpForm.get('num1')?.value +''+this.otpForm.get('num2')?.value+''+this.otpForm.get('num3')?.value+''+this.otpForm.get('num4')?.value+'';
    console.log(otp);

    const data={
      "phone":this.data.mobile,
      "otp":otp,
      "accountType":"mobile",
      "token":"dMKvTQMKRJiwPOmCCAv_C0:APA91bG7p8IcgGYcQoXLVwyrlieqBMQVVU1oEbZfAbQwKoQz5zNiLPcwswzSicENYjx1Yx2Z4KgIVQ4zbaiIvbVrrwGicaQCRA0s2uTrBxNy5hFbFKiqVInqrMd_N2wkwNFy9nqoD8AP",
      "alias":"LOCALHOST5400"
   }
   this.commonService.postApi1(data).subscribe((res)=>{
     console.log(res);
     localStorage.setItem('token',res.token);
   })
   
   
    
 
    this.router.navigate(['/home-page']);
  }

}
