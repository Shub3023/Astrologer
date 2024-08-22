import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { CommonHttpEndpointsService } from 'src/app/common-http-endpoints.service';
import { addOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.page.html',
  styleUrls: ['./my-profile.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class MyProfilePage implements OnInit {
  data: any;
  basic_info: boolean = true;
  about_me: boolean = false;
  bank_details:boolean = false;
  languages:boolean=false;
  specializations:boolean=false;
  gallerys:boolean=false;

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
    this.about_me=false;
    this.bank_details=false;
    this.languages=false;
    this.specializations=false;
    this.gallerys=false;
    this.basic_info=true;

  }

  aboutMe(){
    this.bank_details=false;
    this.languages=false;
    this.specializations=false;
    this.gallerys=false;
    this.basic_info=false;
    this.about_me=true;

  }

  bankDetails(){
    this.about_me=false;
    this.languages=false;
    this.specializations=false;
    this.gallerys=false;
    this.basic_info=false;
    this.bank_details=true;
  }

  language(){
    this.about_me=false;
    this.bank_details=false;
    this.specializations=false;
    this.gallerys=false;
    this.basic_info=false;
    this.bank_details=false;
    this.languages=true;

  }

  specialization(){
    this.about_me=false;
    this.bank_details=false;
    this.languages=false;
    this.gallerys=false;
    this.basic_info=false;
    this.specializations=true;



  }

  gallary(){
    this.about_me=false;
    this.bank_details=false;
    this.languages=false;
    this.specializations=false;
    this.basic_info=false;
    this.gallerys=true;
  }

}
