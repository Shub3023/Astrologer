import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { CommonHttpEndpointsService } from 'src/app/common-http-endpoints.service';
import { addOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.page.html',
  styleUrls: ['./my-profile.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class MyProfilePage implements OnInit {
  data: any;
  basic_info: boolean = true;
  notifications: boolean = false;
  account_deactivation = false;

  constructor(public commonApi: CommonHttpEndpointsService) {
    addIcons({ addOutline });
  }
  ngOnInit() {
    this.commonApi.userProfile().subscribe((res) => {
      this.data = res;
      console.log(res);
    });
  }

  basicInfo(){
    this.notifications=false;
    this.account_deactivation=false;
    this.basic_info=true;
  }

  notification(){
    this.account_deactivation=false;
    this.basic_info=false;
    this.notifications=true;
  }

  acoountDeactivation(){
    this.basic_info=false;
    this.notifications=false;
    this.account_deactivation=true;

  }
}
