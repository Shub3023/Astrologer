import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
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
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-loading-pop-up',
  templateUrl: './loading-pop-up.page.html',
  styleUrls: ['./loading-pop-up.page.scss'],
  standalone: true,
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,IonLabel,IonButton,
    IonButtons,IonImg, MatFormFieldModule,MatSelectModule,MatInputModule,
    MatDatepickerModule,MatNativeDateModule,ReactiveFormsModule,
    CommonModule,NgxMatTimepickerModule,MatIconModule,MatProgressSpinnerModule],
})
export class LoadingPopUpPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
