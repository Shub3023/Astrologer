import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import {alarmOutline,  call,  callSharp, chatbubbleEllipses, chatbubbleEllipsesOutline, chatbubbleEllipsesSharp, flowerSharp, folderOpenOutline, homeSharp, menuOutline,notificationsOutline,reorderThreeSharp,searchOutline, star, videocam, videocamSharp, walletOutline} from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../data.service';
import { CommonHttpEndpointsService } from '../common-http-endpoints.service';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,HttpClientModule]
})
export class HomePagePage implements OnInit {

  home:boolean=true;
  chat:boolean=false;
  live:boolean=false;
  call:boolean=false;
  pooja: boolean=false;

  object1:any |[]

  constructor(private navCtrl: NavController,private router:Router, public http:HttpClient, public dataService:DataService,public commonService:CommonHttpEndpointsService,){
    addIcons({menuOutline,searchOutline,walletOutline,notificationsOutline,
      homeSharp,chatbubbleEllipsesSharp,videocamSharp,callSharp,flowerSharp,reorderThreeSharp,folderOpenOutline,alarmOutline
    ,chatbubbleEllipsesOutline,call,videocam,chatbubbleEllipses,star})
  }


  ngOnInit() {
  }

  fetchAPI(patameter:string){

    if(patameter=='call'){
      this.home=false
      this.chat=false;
      this.call=true;
      this.live=false;
      this.pooja=false
    }
   else if(patameter=='chat'){
      this.home=false
      this.call=false;
      this.chat=true;
      this.live=false;
      this.pooja=false
    }
    this.commonService.getApiData(patameter).subscribe((res)=>{
      this.object1=res;
    })
      
  }

  homePage(){
    this.call=false;
    this.chat=false;
    this.live=false;
    this.pooja=false
    this.home=true;

  }
  livePage(){
    this.home=false
    this.call=false;
    this.chat=false;
    this.pooja=false
    this.live=true


  }
  poojaPage(){
    this.home=false
    this.call=false;
    this.chat=false;
    this.live=false;
    this.pooja=true;
    // this.router.navigate(['/my-profile']);
    this.navCtrl.navigateForward('/my-profile');

  }

  selectedTab: string = 'home';  // Default selected tab is 'home'
  selectTab(tabName: string) {
    this.selectedTab = tabName;
  }

  }

