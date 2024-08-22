import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonHttpEndpointsService } from '../common-http-endpoints.service';
import { addIcons } from 'ionicons';
import { addOutline } from 'ionicons/icons';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AstrologerModule { 
  data: any;
  basic_info: boolean = true;
  notifications: boolean = false;
  account_deactivation = false;

  constructor(public commonApi: CommonHttpEndpointsService) {
    addIcons({ addOutline });
  }
  ngOnInit() {
    this.commonApi.userProfile().subscribe((res) => {
      this.data= res;
      console.log(res);
    });
  }

  
  
  
  

}
