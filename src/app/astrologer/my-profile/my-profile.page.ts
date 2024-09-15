import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { CommonHttpEndpointsService } from 'src/app/common-http-endpoints.service';
import { addOutline, arrowBackOutline, cameraOutline, createOutline, trashOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { Router } from '@angular/router';

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
  file:any;

  constructor(public commonApi: CommonHttpEndpointsService, public router:Router) {
    addIcons({ addOutline,arrowBackOutline,trashOutline,cameraOutline,createOutline});
  }
  ngOnInit() {
    this.commonApi.userProfile().subscribe((res) => {
      this.data = res;
      console.log(res);
    });
    this.formatDate(this.data?.birthDate);
  }

  profilePicUrl: any = '../../../assets/profile-image.png'; 

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.profilePicUrl = URL.createObjectURL(file); 
    }
    // this.router.navigate(['/my-profile1']);
  }


  basicInfo(){
    this.about_me=false;
    this.bank_details=false;
    this.languages=false;
    this.specializations=false;
    this.gallerys=false;
    this.basic_info=true;
    this.specializations=false;

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
  backButton(){
    this.router.navigate(['/home-page'])
  }
  formatDate(dateTimeString: string): string {
    if (!dateTimeString) return '';
    const [datePart] = dateTimeString.split(' ');
    const [year, month, day] = datePart.split('-');
    return `${day}-${month}-${year}`;
  }

  onChangeFile(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log("File Data", file);
      this.commonApi.profileUpload(file).subscribe((res) => {
        console.log("Profile:", res);
        // Refresh the data or reload the page
        this.refreshProfileData(); // Fetch updated profile data
        // location.reload(); 
      });
    }
  }
  
  refreshProfileData() {
    this.commonApi.userProfile().subscribe((res) => {
      this.data = res;
      console.log("Profile Data Refreshed", res);
    });
  }
  


}
