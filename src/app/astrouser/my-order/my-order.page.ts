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
import { alarmOutline, call, callSharp, chatbubbleEllipses, chatbubbleEllipsesOutline, chatbubbleEllipsesSharp, flowerSharp, folderOpenOutline, homeSharp, menuOutline, notificationsOutline, reorderThreeSharp, searchOutline, star, videocam, videocamSharp, walletOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';


@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.page.html',
  styleUrls: ['./my-order.page.scss'],
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
export class MyOrderPage implements OnInit {

  constructor() { 
    addIcons({
      menuOutline,notificationsOutline,
      searchOutline,
      walletOutline,
      homeSharp,
      chatbubbleEllipsesSharp,
      videocamSharp,
      callSharp,
      flowerSharp,
      reorderThreeSharp,
      folderOpenOutline,
      alarmOutline,
      chatbubbleEllipsesOutline,
      call,
      videocam,
      chatbubbleEllipses,
      star,

    });
  
  }

  ngOnInit() {
  }

  selectedTab: string = 'home';
selectTab(tabName: string) {
  this.selectedTab = tabName;
}


}
