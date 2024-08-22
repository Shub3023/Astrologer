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
import {alarmOutline,  callSharp, chatbubbleEllipsesOutline, chatbubbleEllipsesSharp, flowerSharp, folderOpenOutline, homeSharp, menuOutline,notificationsOutline,reorderThreeSharp,searchOutline, videocamSharp, walletOutline} from 'ionicons/icons';
import { IonicModule } from '@ionic/angular';
// import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonButton, IonButtons, IonImg, IonIcon,
    MatFormFieldModule, MatSelectModule, MatInputModule, MatDatepickerModule, MatNativeDateModule,
    ReactiveFormsModule, CommonModule, NgxMatTimepickerModule, MatIconModule,RouterModule
  ],
})
export class TabsPage implements OnInit {

  constructor(private router:Router){
    addIcons({menuOutline,searchOutline,walletOutline,notificationsOutline,
      homeSharp,chatbubbleEllipsesSharp,videocamSharp,callSharp,flowerSharp,reorderThreeSharp,folderOpenOutline,alarmOutline
    ,chatbubbleEllipsesOutline})
  }
  

  ngOnInit() {
  // }
  // homePage(){
    // this.router.navigate(['/home'])
  // }

  // chatPage(){
    // this.router.navigate(['/chat'])
  // }

  // chatPage(){
    // this.router.navigate(['/chat'])
  }
  selectedTab: string = 'home';  // Default selected tab is 'home'
  selectTab(tabName: string) {
    this.selectedTab = tabName;
  }

}
