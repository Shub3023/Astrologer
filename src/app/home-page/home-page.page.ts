import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import {
  alarmOutline,
  call,
  callSharp,
  chatbubbleEllipses,
  chatbubbleEllipsesOutline,
  chatbubbleEllipsesSharp,
  flowerSharp,
  folderOpenOutline,
  homeSharp,
  menuOutline,
  notificationsOutline,
  reorderThreeSharp,
  searchOutline,
  star,
  videocam,
  videocamSharp,
  walletOutline,
} from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../data.service';
import { CommonHttpEndpointsService } from '../common-http-endpoints.service';
import { NavController } from '@ionic/angular';
import { MatDialog } from '@angular/material/dialog';
import { MediaIconPopUpPage } from '../media-icon-pop-up/media-icon-pop-up.page';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    HttpClientModule,
  ],
})
export class HomePagePage implements OnInit {
  home: boolean = true;
  chat: boolean = false;
  live: boolean = false;
  call: boolean = false;
  pooja: boolean = false;
  profileURL="../../../../assets/profile.jpeg";
  object1: any | [];
  data: any | [];
  type:string | undefined;

  constructor(
    private navCtrl: NavController,
    private router: Router,
    public http: HttpClient,
    public dataService: DataService,
    public commonService: CommonHttpEndpointsService,
    private dialog:MatDialog
  ) {
    addIcons({
      menuOutline,
      searchOutline,
      walletOutline,
      notificationsOutline,
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

  ngOnInit() {}

  fetchAPI(patameter: string) {
    if (patameter == 'call') {
      this.home = false;
      this.chat = false;
      this.call = true;
      this.live = false;
      this.pooja = false;
    } else if (patameter == 'chat') {
      this.home = false;
      this.call = false;
      this.chat = true;
      this.live = false;
      this.pooja = false;
    }
    this.commonService.getApiData(patameter).subscribe((res) => {
      this.object1 = res;
    });
  }

  homePage() {
    this.call = false;
    this.chat = false;
    this.live = false;
    this.pooja = false;
    this.home = true;
  }
  livePage() {
    this.home = false;
    this.call = false;
    this.chat = false;
    this.pooja = false;
    this.live = true;
  }
  poojaPage() {
    this.home = false;
    this.call = false;
    this.chat = false;
    this.live = false;
    this.pooja = true;
    // tter.navigate(['/my-profile']);
    console.log('TYPE Home', this.dataService.type);

    if (this.dataService.type === 'Astrologer') {
      this.navCtrl.navigateForward('/my-profile1');
    } else {
      this.navCtrl.navigateForward('/my-profile');
    }
  }

  selectedTab: string = 'home';
  selectTab(tabName: string) {
    this.selectedTab = tabName;
  }

  //refresher
  handleRefresh(event: any) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }
  handleRefresh1(event: any) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }

  openCallPopUp(value:[],parameter:string) {
    // let dialogRef = this.dialog.open(MediaIconPopUpPage,{
      // height: '38%',
      // width: '600px',
        //  
    // });
    this.data=value;
    this.type=parameter;
    Swal.fire(
      {
        html: '<span  style=" font-family:"Poppins" !important;border-radius:10px; ><div style="font-family:"Poppins";border-radius:10px"> <img style="height:80px"width:80px;  src="../../../../assets/profile.jpeg" /></div><ion-card-title style="margin-bottom:10px;margin-top:7px;font-weight:550;font-size: 0.9rem;">' + this.data.salutation + ' </ion-card-title><p style=" font-size: 0.8rem; color:#666666;margin:0;padding:0;font-family:Poppins;width:330px; margin-left:-7px;display:flex;flex-wrap:wrap;">This offer at ' + this.data.currency + this.data.rates + this.data.serviceTimeType + ' is for 5 min only.Astrologer will try to answer atleast one question.<div style="margin-top:20px"><ion-button style="width:100%;height:45px; color:black; ;padding:12px;--border-radius:5px;margin:0;padding:0;font-family:Poppins";font-size:0.6rem;--border:none>' + this.type + ' Now for ' + this.data.currency + this.data.rates + ' ' + this.data.serviceTimeType + '</ion-button></div> <span>',
        position: 'center',
        showCloseButton: true,
        showConfirmButton: false,
        customClass: {
          popup: 'custom-swal-popup'
        },
        showClass: {
          popup: 'animate__animated animate__slideInUp'
        },
        hideClass: {
          popup: 'animate__animated animate__slideOutDown'
        },      
        willOpen: () => {
          const popup = Swal.getPopup();
          if (popup) {
            popup.style.borderRadius = '10px';
            popup.style.margin = '0';
          }
        }
      }
    )
  }
  refreshPage(){
    alert("hello")
    location.reload();
    this.router.navigate(['/home-page']);
    this.refreshProfileData();
    
  }

  refreshProfileData() {
    this.commonService.userProfile().subscribe((res) => {
      this.data = res;
      console.log("Profile Data Refreshed", res);
    });
  }


}
