import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonLabel, IonButtons, IonImg, IonIcon } from '@ionic/angular/standalone';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { addIcons } from 'ionicons';
import {alarmOutline, callSharp, chatbubbleEllipsesOutline, chatbubbleEllipsesSharp, flowerSharp, folderOpenOutline, homeSharp, menuOutline,notificationsOutline,reorderThreeSharp,searchOutline, videocamSharp, walletOutline} from 'ionicons/icons';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,HttpClientModule]
})
export class ChatPage implements OnInit {
  object1:any | []


  constructor(private http:HttpClient,public data:DataService,) { }

  ngOnInit() {

    // this.http.get('http://api.homekodi.com/asg/elementro/search?mode=chat').subscribe((res)=>{
      // this.object1=res;
    // })
  }

}
