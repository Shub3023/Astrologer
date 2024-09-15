import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavController } from '@ionic/angular';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { MatDialog } from '@angular/material/dialog';
import { addIcons } from 'ionicons';
import { closeOutline } from 'ionicons/icons';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-media-icon-pop-up',
  templateUrl: './media-icon-pop-up.page.html',
  styleUrls: ['./media-icon-pop-up.page.scss'],
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
export class MediaIconPopUpPage implements OnInit {
  constructor(
    private dialog: MatDialog,
    public dataService: DataService,
    private router: Router,
    private navCtrl: NavController,

  ) {
    addIcons({ closeOutline });
  }
  call:boolean=false;
  chat:boolean=false;
  video:boolean=false;
  type:any=this.dataService.mediaType;


  ngOnInit() {
    this.callFun();
  }
  

  backButton() {
    this.navCtrl.navigateForward('/home-page');
  }
callFun(){
  if(this.type=="chat"){
    this.call=false;
    this.video=false;
    this.chat=true;
 }
 else if(this.type=="call"){
  this.video=false;
  this.chat=false;
  this.call=true;


 }
 else{
  this.call=false;
  this.chat=false;
  this.video=true;


 }

}
}
