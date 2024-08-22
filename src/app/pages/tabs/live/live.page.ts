import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonLabel, IonButtons, IonImg, IonIcon } from '@ionic/angular/standalone';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { addIcons } from 'ionicons';
import {alarmOutline, callSharp, chatbubbleEllipsesOutline, chatbubbleEllipsesSharp, flowerSharp, folderOpenOutline, homeSharp, menuOutline,notificationsOutline,reorderThreeSharp,searchOutline, star, videocamSharp, walletOutline} from 'ionicons/icons';
import { HttpClient} from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-live',
  templateUrl: './live.page.html',
  styleUrls: ['./live.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonButton, IonButtons, IonImg, IonIcon,
    MatFormFieldModule, MatSelectModule, MatInputModule, MatDatepickerModule, MatNativeDateModule,
    ReactiveFormsModule, CommonModule,HttpClientModule, NgxMatTimepickerModule, MatIconModule,MatCardModule, MatButtonModule,
   
  ],

})
export class LivePage implements OnInit {

  constructor() { }

  ngOnInit() {

    alert("hello")
// 
    // this.http.getData('chat')

  }

}
