import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfilePage } from './my-profile/my-profile.page';
import { CommonHttpEndpointsService } from '../common-http-endpoints.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,MyProfilePage,CommonHttpEndpointsService
  ]
})
export class AstrouserModule { }
