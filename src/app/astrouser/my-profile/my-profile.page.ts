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
import { addOutline, arrowBackOutline, cameraOutline, trashOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
  var1 !:| string;
  file:any;

  constructor(public http:HttpClient, public commonApi: CommonHttpEndpointsService, private router:Router) {
    addIcons({ addOutline,arrowBackOutline,trashOutline,cameraOutline});
  }
  ngOnInit() {
    this.commonApi.userProfile().subscribe((res) => {
      this.data = res;
      console.log(res);
    // const var1=this.formatDate(this.data?.birthDate);

    });


  }

  profilePicUrl: any = '../../../assets/profile-image.png'; 

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.profilePicUrl = URL.createObjectURL(file); 
    }

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
  backButton(){
    this.router.navigate(['/home-page'])
  }

  formatDate(dateTimeString: string): string {
    if (!dateTimeString) return '';
    const [datePart] = dateTimeString.split(' ');
    const [year, month, day] = datePart.split('-');
    return `${day}-${month}-${year}`;
  }

  // profilePhoto(){
    // this.file='../../../assets/profile-image.png';
    // this.commonApi.profileUpload(this.file).subscribe((res)=>{
        // console.log(res);
    // })
  // }

  // onChangeFile(event:any){
    // if(event.target.files.length>0){
      // const file = event.target.files[0];
      // console.log("File Data",file)
      // this.commonApi.profileUpload(file).subscribe((res)=>{
        // console.log("Profile:",res);
      // })
    // }
  // }

}
